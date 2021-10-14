import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

interface InputProps {
  sendMessage: (e) => void;
  message: string;
  setMessage: (e) => void;
}

function Input({sendMessage, message, setMessage}: InputProps){
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        style={{ padding: "10px", marginTop: "10px" }}
      >
        <Grid item xs={10}>
          <TextField
            variant="outlined"
            multiline
            rows={2}
            fullWidth
            placeholder="메시지를 입력하세요."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          />
        </Grid>
        <Grid item xs={2} container>
          <Button variant="contained" fullWidth onClick={(e) => sendMessage(e)}>
            전송
          </Button>
        </Grid>
      </Grid>
    );
}
export default Input;