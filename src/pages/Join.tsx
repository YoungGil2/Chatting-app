import Grid  from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { Link as Nav} from "react-router-dom";

function Join() {
  const [user, setUser] = useState(""); 
  const [room, setRoom] = useState(""); 
  return (
    <Grid container justifyContent="center" style={{ padding: "1em", marginTop: '10px' }}>
      <Grid item xs={6}>
        <Paper>
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item>이름을 입력하고 입장을 하시오.</Grid>
            <Grid item>
              <TextField
                name="userName"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                variant="outlined"
              ></TextField>
            </Grid>
            {/* <Grid item>
              <TextField
                name="roomName"
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
              ></TextField>
            </Grid> */}
            <Grid item>
              <Button variant="contained"  component={Nav} to={`/room?user=${user}`}>
                입장
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Join;
