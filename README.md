
# Charcha - Real-time Chat Room App
Charcha is a real-time chat room application built using React, Node.js, and Socket.IO. It allows users to create and join chat rooms where they can communicate with each other instantly.

## Features
1- Real-time Communication: Charcha utilizes Socket.IO to enable real-time communication between users within chat rooms.
2- Create and Join Chat Rooms: Users can create their own chat rooms or join existing ones.
3- Simple and Intuitive Interface: The user interface is designed to be easy to use, with a clean and intuitive design.

## Web-app Screenshots
![image](https://github.com/Tejas20-03/chat-app/assets/92146582/0b66b32a-4715-469b-83e4-3499f2c05532)

![image](https://github.com/Tejas20-03/chat-app/assets/92146582/e418a08f-8205-4b5f-98a2-779fa16a8093)





## Technologies Used
- React: Frontend development is done using React, a popular JavaScript library for building user interfaces.
- Node.js: Backend development is powered by Node.js, a runtime environment for executing JavaScript code server-side.
- Socket.IO: Socket.IO enables real-time, bidirectional and event-based communication between the browser and the server.
- Express.js: Express.js is used as the web application framework for Node.js to handle HTTP requests and routing.

## Getting Started
To get started with Charcha, follow these steps:

- Clone the repository:
```bash
git clone https://github.com/your-username/charcha.git
```
- Navigate to the project directory:
```bash

cd chat-app
```
- Install dependencies for both frontend and backend:
```bash
cd frontend && npm install
cd ../backend && npm install
```
- Configure environment variables:

1- Create a .env file in the server directory.

Define the following environment variables:
```
makefile
PORT=3001
BACKEND_URI=your backend url
```
- Start the backend server:
```
bash
cd ../backend && npm start
```
- Start the frontend development server:
```
bash
cd ../frontend && npm start
```
- Open your browser and navigate to http://localhost:3000 to access the Charcha application.
## Acknowledgements
- This project was inspired by the need for real-time communication in web applications.
- Thanks to the developers of React, Node.js, Socket.IO, and other open-source libraries used in this project.
