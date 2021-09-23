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
  const [name, setName] = useState(""); 
  const [room, setRoom] = useState(""); 
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
 
  useEffect(()=>{
    socket = socketClient(Server);
    const {name, room} = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room });

    socket.on("usersInfo",(userInfoArray)=> {
      // console.log('접속자들 정보:', userInfoArray);
      setUsers(userInfoArray);
    });

    return ()=>{
      socket.disconnect();
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
      socket.emit("sendMessage",name, message,()=>{setMessage("")});
    }
  };
  return (
    <Grid container justifyContent="center" direction="column" spacing={3} style={{ padding: "1em" }}>
       <Grid item xs={6}>
        <Paper>
          <Grid container direction="column" >
            <Grid container>
              <Grid>접속자 리스트</Grid>
            </Grid>
            {users.map((value,key)=> {
                return (
                  <Grid key={key} container justifyContent="flex-end">
                    <Grid>{value.name} </Grid>
                  </Grid>
                );
            })}
          </Grid>
        </Paper>
      </Grid>
      
      
      <Grid item xs={6}>
        <Paper>
          <Grid container direction="column">
            
            {messages.map((value,key) => {
              if(name === value.name){
                return (
                  <Grid key={key} container justifyContent="flex-end">
                    <Grid>{value.name}: </Grid>
                    <Grid>{value.message}</Grid>
                  </Grid>
                )
              }else if(value.name === 'admin') {
                return (
                  <Grid key={key} container direction="column" alignItems="center" justifyContent="flex-start">
                    <Grid>{value.name}</Grid>
                    <Grid>{value.message}</Grid>
                  </Grid>
                )
              }else {
                return (
                  <Grid key={key} container justifyContent="flex-start">
                    <Grid>{value.name}: </Grid>
                    <Grid>{value.message}</Grid>
                  </Grid>
                )
              }
              
            })}
          </Grid>
          <Grid container justifyContent="center" >
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
              <Button variant="contained" onClick={()=>{ socket.emit("sendMessage",name, message,()=>{setMessage("")});}}>전송</Button>
            </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Room;
