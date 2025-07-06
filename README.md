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