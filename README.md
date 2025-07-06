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



------------------------------------------------------------------------------------------------------------

## 🐳 Dockerization Setup

This project is fully containerized using **Docker Compose** for consistent and portable deployment.

---

### 📌 Requirements

- **Docker Desktop** installed and running  
  👉 Download: https://www.docker.com/products/docker-desktop (choose "Mac with Apple chip" for Mac M3)

Check versions:
```bash
docker --version
docker compose version

📦 Docker Compose Architecture
+------------------+
| MongoDB Container |
| (Port: 27017)     |
+------------------+
          |
+------------------+
| Node.js Backend   |
| (Port: 5050)      |
+------------------+
          |
+------------------+
| Nginx Frontend    |
| (Port: 8080)      |
+------------------+



📌 Steps to Run via Docker Compose

1️⃣ Clone the repository and cd into project
git clone <repo-url>
cd Note_Taking_App

2️⃣ Confirm backend package.json has a dev script:
"scripts": {
  "dev": "node server.js",
  "start": "node server.js"
}

3️⃣ Build all Docker images
docker compose build

4️⃣ Start all containers
docker compose up

5️⃣ Access your services:
	•	Frontend: http://localhost:8080
	•	Backend API: http://localhost:5050/api/notes


📦 Common Docker Commands:-

a. Command
b. Description

a. docker compose build
b. Build images for all services

a. docker compose up
b. Start all services

a. docker compose down
b. Stop and remove all containers

a. docker compose ps
b. View status of running containers

a. docker compose logs backend
b. View logs for the backend container

a. docker compose stop backend
b. Stop backend container only

✅ With this, your entire stack (MongoDB + Backend + Frontend) runs in isolated containers!

📌 Notes
	•	Ensure no local MongoDB or services are already running on ports 27017, 5050, or 8080 before using  Docker Compose.
	•	You can stop everything cleanly with: "docker compose down"




## Built with ❤️ by Ashok Kaji