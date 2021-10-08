import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";

function Home(){
    return (
        <Grid container justifyContent="center" style={{paddingTop: 60}}>
            <Grid xs={11} sm={9} md={10} container spacing={5} direction="column">
                <Grid item>
                    <Typography variant="subtitle1">2021.10.08 - React 개인 프로젝트</Typography>
                    <Typography variant="h3">React + Node.js + Socket.io로 채팅 만들기</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">CSS Framewokr: material-UI 사용</Typography>
                    <Button variant="outlined" component={Link} to="/join" size="large">채팅방 입장하기</Button>
                </Grid>
                <Grid item>
                    <Typography variant="body1"><b>react</b>를 이용하여 채팅어플리케이션을 만들고 <b>Heroku</b>를 이용하여 배포하기</Typography>                     
                </Grid>
                <Grid item>
                    <Typography variant="h4">1. 환경세팅</Typography>
                    <Typography variant="body1">채팅</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" target="_blank" href="https://github.com/yeong-gil/Chatting-app" startIcon={<GitHubIcon />}>GIT HUB</Button>
                </Grid>
               
            </Grid>
        </Grid>
    )
}
export default Home;