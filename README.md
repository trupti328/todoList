# To-Do List App


A full-stack To-Do list application where users can create, view, update, and delete tasks. Built using:

Backend: Node.js + Express.js + MongoDB (Mongoose)

Frontend: React.js

🚀 Features
Add new tasks

Edit existing tasks

Mark tasks as completed/incomplete

Delete tasks

Tasks are saved in MongoDB and persist across page reloads

🛠️ Tech Stack
Frontend: React, Axios, CSS

Backend: Node.js, Express.js, Mongoose

Database: MongoDB (Cloud via MongoDB Atlas)

🔧 Setup Instructions
1️⃣ Backend Setup
Navigate to the backend folder:

cd backend
Install dependencies:


npm install
Create a .env file and add:


PORT=5000
MONGO_URI="your-mongodb-uri-here"
Start the backend server:

node server.js

2️⃣ Frontend Setup
Navigate to the frontend folder:


cd frontend
Install dependencies:


npm install
Start the frontend server:


npm run dev

The React app will run on http://localhost:5173 and communicate with the backend at http://localhost:5000.

