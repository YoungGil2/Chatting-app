const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const port = process.env.PORT || 3005;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// 'connection' 이라는 이벤트를 감지한다.
io.on("connection", function (socket) {
  console.log("유저 입장");
  socket.emit("connertion", null);
  socket.on("disconnect", () => {
    console.log("유저가 떠남");
  });
});
