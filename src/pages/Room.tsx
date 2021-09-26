import queryString from "query-string";
import {useEffect, useState, useRef} from "react";
import socketClient from "socket.io-client";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "../component/List";
import Message from "../component/Message";
import Input from "../component/Input";

const Server = "/";
let socket;

function Room({location}) {
  const [name, setName] = useState(""); 
  const [room, setRoom] = useState(""); 
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const messagesRef = useRef<HTMLDivElement>(null);
 
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

  useEffect(() => {
    messagesRef.current!.scrollTop = messagesRef.current!.scrollHeight;
  }, [messages]);

  const sendMessage = (e)=> {
    e.preventDefault();
    if(message){
      socket.emit("sendMessage",name, message,()=>{setMessage("")});
    }
  };
  return (
    <Grid container justifyContent="center" style={{ padding: "1em" }}>
      <Grid item xs={12} sm={9} md={7}>
        <Paper>
          <List ListData={users} />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={9} md={7} style={{ marginTop: "10px"}}>
        <Paper>
          <div style={{ height: "400px", overflowY: "auto" }} ref={messagesRef}>
            {messages.map((value, key) => {
              return (
                <Message
                  key={key}
                  name={value.name}
                  text={value.message}
                  user={name}
                />
              );
            })}
          </div>
          <Input
            sendMessage={sendMessage}
            message={message}
            setMessage={setMessage}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Room;
