import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

function Home(){
    /**
     * 메인 타이틀 h3 compoent="h1"
     * 서브 타이틀 h4 component="h2"
     * 서서브 타이틀 h5 component="h3"
     * 내용 body1
     */
    const theme = createTheme();
    theme.typography.h3 = {
      fontSize: "1.8rem",
      fontWeight: 700,
      [theme.breakpoints.up("sm")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
    };
    theme.typography.h4 = {
      fontSize: "1.6rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    };
    theme.typography.h5 = {
      fontSize: "1.4rem",
      paddingTop: "1rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7rem",
      },
    };
    theme.typography.body1 = {
        padding: "1rem 0 1rem 0",
        lineHeight: "1.9rem"
    }
       
    
    return (
      <ThemeProvider theme={theme}>
        <Grid container justifyContent="center" style={{ paddingTop: 60 }}>
          <Grid xs={11} sm={9} md={10} container spacing={1} direction="column">
            <Grid item>
              <Typography variant="subtitle1">
                2021.10.08 - React 개인 프로젝트
              </Typography>
              <Typography variant="h3" component="h1">
                React + Node.js + Socket.io로 채팅 만들기
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="h3">
                CSS Framewokr: material-UI 사용
              </Typography>
              <Button
                variant="outlined"
                component={Link}
                to="/join"
                size="large"
              >
                채팅방 입장하기
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <b>react</b>를 이용하여 채팅어플리케이션을 만들고 <b>Heroku</b>
                를 이용하여 배포하기
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h2">
                1. 환경세팅
              </Typography>
              <Typography variant="body1">
                패키지 관리 툴로는 yarn을 사용하였습니다. 개인적으로 yarn이
                편해서 사용하였습니다. 이부분은 따로 설명없이 넘어가겠습니다.<br/>
                먼저 react 프로젝트 먼저 생성합니다. 그리고 하위에 server라는 폴더를 생성
              </Typography>
              <pre style={{ backgroundColor: "#fafafa", padding: 20}}>
                npx create-react-app "이름" -template typescript
              </pre>
              <Typography variant="body1">
                socket.io 설치
              </Typography>
              <pre style={{ backgroundColor: "#fafafa", padding: 20}}>
                yarn add socket.io
              </pre>
              <Typography variant="h5" component="h3">서버 생성</Typography>
              <Typography variant="h5" component="h3">
                1-1. 디렉토리 구조
              </Typography>
              <Grid xs={11} sm={9} md={6}>
                <img
                  style={imgStyle}
                  src="images/directory.png"
                  alt="directory"
                />
              </Grid>
              <Typography variant="body1">
                  디렉토리 구조는 페이지를 담당하는 컴포넌트는 src/pages<br/>
                  header같은 레이아웃을 담당하는 컴포넌트는 src/layout<br/>
                  그 안에 가장 작은 부분부분을 담당하는 컴포넌트는 src/component에 분류하였습니다.
              </Typography>
            </Grid>





            <Grid item>
              <Button
                variant="contained"
                target="_blank"
                href="https://github.com/yeong-gil/Chatting-app"
                startIcon={<GitHubIcon />}
              >
                GIT HUB
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
}

const imgStyle= {
    display: "inline-block",
    width: "100%",
};
export default Home;