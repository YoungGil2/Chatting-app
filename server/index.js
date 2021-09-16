const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const port = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname,"../build")));

io.on("connection", function (socket) {
 
  socket.on("join", ({ user, room }, callback) => {
    console.log(`${user}님 접속됨`);
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

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
