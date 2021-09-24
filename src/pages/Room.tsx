import queryString from "query-string";
import {useEffect, useState} from "react";
import socketClient from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "../component/List";
import Message from "../component/Message";

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
    <Grid container justifyContent="center" style={{ padding: "1em" }}>
       <Grid item xs={12} sm={9} md={7}>
        <Paper>
          <List ListData={users}/>
        </Paper>
      </Grid>
    
      <Grid item xs={12} sm={9} md={7}>
        <Paper>
          {messages.map((value, key)=> {
            // const { name, message } = value;
            return (
              <Message key={key} name={value.name} text={value.message}  user={name}/>
            );
          })}
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
