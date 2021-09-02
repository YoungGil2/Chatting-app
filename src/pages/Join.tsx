import Grid  from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { Link as Nav} from "react-router-dom";

function Join() {
  const [user, setUser] = useState(""); 
  const [room, setRoom] = useState(""); 
  return (
    <Grid container justifyContent="center" style={{ padding: "1em" }}>
      <Grid item xs={6}>
        <Paper>
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item>
              <TextField
                name="userName"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
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
              <Link component={Nav} to={`/room?user=${user}`}>
                입장
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Join;
