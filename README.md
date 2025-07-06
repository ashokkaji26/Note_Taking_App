# 📝 Note-Taking Web App (Full-Stack)

A simple full-stack note-taking web application where users can:
- Add new notes
- Edit existing notes
- Delete notes

Built using **HTML, CSS, JavaScript (Frontend)**, **Node.js + Express.js (Backend)** and **MongoDB (Database)**.

---

## 📚 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (local or MongoDB Atlas)
- **API Testing:** Postman, curl
- **Other Tools:** nodemon (dev dependency), CORS middleware, Mongoose ODM

---

## 📊 Application Architecture

+—————————+
|        Browser (UI)        |
|   HTML + CSS + JavaScript  |
|    (index.html, style.css, |
|      script.js)            |
+————+–––––––+
|
|  HTTP Requests (Fetch API)
|
+————v–––––––+
|        Express Server      |
|        (Node.js + CORS)    |
|    (server.js + Routes)    |
+————+–––––––+
|
|  API Calls (REST)
|
+————v–––––––+
|     MongoDB Database       |
| (MongoDB Community / Atlas)|
|    (notes collection via   |
|      Mongoose Schema)      |
+—————————+

---

## 🚀 Features

- Create notes  
- View all notes  
- Edit notes  
- Delete notes  

---

## 📦 Project Setup & Installation

### 📌 Prerequisites

- Node.js installed  
- MongoDB installed (or MongoDB Atlas account)  
- npm installed  
- Postman (optional for API testing)

---

### 📌 Steps to Set Up Locally

1️⃣ **Clone this repository**
```bash
git clone <repo-url>
cd Note_Taking_App

2️⃣ Install backend dependencies
cd server
npm install

3️⃣ Create .env file inside the server/ folder
MONGO_URI=mongodb://127.0.0.1:27017/noteapp

4️⃣ Start MongoDB locally
brew services start mongodb-community

5️⃣ Start backend server
npx nodemon server.js

6️⃣ Serve frontend files
--> If you have http-server installed globally:
cd ../client
http-server

--> Or use Live Server extension in VS Code to open index.html

7️⃣ Access the App
	•	Frontend: http://127.0.0.1:8080
	•	Backend API: http://127.0.0.1:5050/api/notes


📬 API Endpoints
a. Method
b. Endpoint
c. Description

a. GET
b. /api/notes
c. Get all notes

a. POST
b. /api/notes
c. Add a new note

a. PUT
b. /api/notes/:id
c. Edit existing note

a. DELETE
b. /api/notes/:id
c. Delete a note
