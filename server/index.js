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
const { addUser, removeUser } = require("./user");
const port = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname,"../build")));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../build/index.html'));
});

io.on("connection", function (socket) {

  socket.on("join", ({ name, room }) => {
    const { user, users } = addUser({ id: socket.id, name: name });
    console.log(user);
    socket.broadcast.emit("message", {
      name: "admin",
      message: `${user.name}님이 접속하였습니다.`
    });
    
    io.emit("usersInfo", users);
  
  });

  socket.on("sendMessage", (name, message, callback) => {
    console.log(message);
    io.emit("message", { name: name, message: message });

    callback();
  });

  socket.on("disconnect", () => {
    const { user, users } = removeUser({ id: socket.id});

    io.emit("usersInfo", users);
    console.log(user);
    if(user){
      socket.broadcast.emit("message", {
        name: "admin",
        message: `${user.name}님이 퇴장하셨습니다.`
      })
    }
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
