import queryString from "query-string";
import {useEffect, useState} from "react";
import socketClient from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Server = "/";
let socket;

function Room({location}) {
  const [user, setUser] = useState(""); 
  const [room, setRoom] = useState(""); 
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(messages);
 
  useEffect(()=>{
    socket = socketClient(Server);
    const {user, room} = queryString.parse(location.search);
    setUser(user);
    setRoom(room);

    socket.emit("join", { user, room }, () => {
    });

    return ()=>{
      socket.emit('disconnect');
      socket.off();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Server, location.search]);

  useEffect(()=>{
    socket.on("message",(message)=>{
      setMessages(messages => [ ...messages, message ]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const sendMessage = (e)=> {
    if(message && e.key === "Enter"){
      socket.emit("sendMessage",user, message,()=>{setMessage("")});
    }
  };
  return (
    <Grid container justifyContent="center" style={{ padding: "1em" }}>
      <Grid item xs={6}>
        <Paper>
          <Grid container direction="column">
            {messages.map((index) => {
              if(user === index.user){
                return (
               
                  <Grid container justifyContent="flex-end">
                    <Grid>{index.user}: </Grid>
                    <Grid>{index.message}</Grid>
                  </Grid>
                )
              }else if(index.user === 'admin') {
                return (
                  <Grid container direction="column" alignItems="center" justifyContent="flex-start">
                    <Grid>{index.user}</Grid>
                    <Grid>{index.message}</Grid>
                  </Grid>
                )
              }else {
                return (
                  <Grid container  justifyContent="flex-start">
                    <Grid>{index.user}: </Grid>
                    <Grid>{index.message}</Grid>
                  </Grid>
                )
              }
              
            })}
         
            <Grid container justifyContent="center">
              <TextField
                variant="outlined"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                onKeyPress={(e) => {
                  sendMessage(e);
                }}
              />
              <Button variant="contained" onClick={()=>{ socket.emit("sendMessage",user, message,()=>{setMessage("")});}}>전송</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Room;
