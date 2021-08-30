import React, { useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import socketClient from "socket.io-client";
import {} from "./pages/index";

const Server = "http://localhost:3005";

function App() {
  useEffect(() => {
    const socket = socketClient(Server);
    socket.on("connection", () => {
      console.log("채팅앱 백엔드 연결되었습니다.");
    });
  }, [Server]);
  return (
    <div className="App">
      <Route path="/" component={Join} />
      <Route path="/room" component={Room} />
    </div>
  );
}

export default App;
