const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const ACTIONS = require("./Actions");

const server = http.createServer(app);

const io = new Server(server);

const userSocketMap = {};

const getAllConnectedUsers = (roomId) => {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
};

io.on("connection", (socket) => {
  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);

    const users = getAllConnectedUsers(roomId);

    users.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        users,
        username,
        socketId: socket.id,
      });
    });
  });
});

socket.on(ACTIONS.CHANGE, ({ roomId, chat }) => {
  socket.in(roomId).emit(ACTIONS.CHANGE, { chat });
});

socket.on(ACTIONS.SYNC, ({ socketId, chat }) => {
  io.to(socketId).emit(ACTIONS.SYNC, { code });
});

socket.on("disconnecting", () => {
  const rooms = [...socket.rooms];
  rooms.forEach((roomId) => {
    socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
      socketId: socket.id,
      username: userSocketMap[socket.id],
    });
  });
  delete userSocketMap[socket.id];
  socket.leave();
});

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
