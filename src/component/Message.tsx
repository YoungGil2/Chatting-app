import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface MessageProps {
    name: string;
    text: string;
    user: string;
}

function Message({name, text, user}: MessageProps){
    console.log(user, name);
    const Position = user === name ? "flex-end" : "flex-start";
    return (
        <Grid container direction="column" alignItems={Position} spacing={2} style={{width: "100%", padding: "10px 10px"}}>
            <Grid item>
                <Typography>{name}</Typography>
            </Grid>
            <Grid item>
                <Paper elevation={3} style={{ padding: "10px 20px"}}>
                    {text}
                </Paper>
            </Grid>        
        </Grid>
    )
}
export default Message;