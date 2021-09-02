const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "https://react-chatting-project.herokuapp.com",
    methods: ["GET", "POST"],
  },
});
const port = process.env.PORT || 3005;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

io.on("connection", function (socket) {
  console.log("유저 입장");
  socket.on("join", ({ user, room }, callback) => {
    socket.broadcast.emit("message", {
      user: "admin",
      message: `${user}님이 접속하였습니다.`,
    });
    callback();
  });

  socket.on("sendMessage", (user, message, callback) => {
    console.log(message);
    io.emit("message", { user: user, message: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("유저가 떠남");
  });
});
