import Grid  from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { Link as Nav} from "react-router-dom";

function Join() {
  const [name, setName] = useState(""); 
  return (
    <Grid container justifyContent="center" style={{ padding: "1em", marginTop: '10px' }}>
      <Grid item xs={12} sm={9} md={7}>
        <Paper>
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item>이름을 입력하고 입장을 하시오.</Grid>
            <Grid item>
              <TextField
                name="userName"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                variant="outlined"
                placeholder="이름을 입력해주세요."
              ></TextField>
            </Grid>
            <Grid item>
              <Button variant="contained"  component={Nav} to={`/room?name=${name}`}>
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
