const apiURL = "http://127.0.0.1:5050/api/notes";

function createNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  })
  .then(res => res.json())
  .then(() => {
    loadNotes();
  });
}

function loadNotes() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      const notesDiv = document.getElementById("notes");
      notesDiv.innerHTML = "";
      data.forEach(note => {
        notesDiv.innerHTML += `
          <div class="note" id="note-${note._id}">
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
            <button onclick="deleteNote('${note._id}')">Delete</button>
          </div>
        `;
      });
    });
}

function deleteNote(id) {
  fetch(`${apiURL}/${id}`, {
    method: "DELETE"
  })
  .then(() => loadNotes())
  .catch(err => console.error("Delete error:", err));
}

function editNote(id, oldTitle, oldContent) {
  const newTitle = prompt("Edit Title:", oldTitle);
  const newContent = prompt("Edit Content:", oldContent);

  if (newTitle !== null && newContent !== null) {
    fetch(`${apiURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, content: newContent })
    })
    .then(res => res.json())
    .then(() => loadNotes())
    .catch(err => console.error("Edit error:", err));
  }
}

window.onload = loadNotes;