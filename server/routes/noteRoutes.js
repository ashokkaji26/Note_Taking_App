const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Get all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Create a note
router.post("/", async (req, res) => {
  console.log("POST /api/notes hit with body:", req.body); 
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create note" });
  }
});

// Update a note
router.put("/:id", async (req, res) => {
  console.log("PUT /api/notes/" + req.params.id);
  const { title, content } = req.body;
  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );
  res.json(updatedNote);
});

// Delete a note
router.delete("/:id", async (req, res) => {
  console.log("DELETE /api/notes/" + req.params.id);
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;