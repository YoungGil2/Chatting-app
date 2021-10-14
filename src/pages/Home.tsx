import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Styled from "styled-components";

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
      marginTop: "2rem",
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
        lineHeight: "1.9rem"
    }
       
    
    return (
      <ThemeProvider theme={theme}>
        <StyledGrid container justifyContent="center">
          <Grid xs={11} sm={9} md={10}  >
            <Grid item>
              <Typography variant="subtitle1">
                2021.10.08 - React 개인 프로젝트
              </Typography>
              <Typography variant="h3" component="h1">
                React + Node.js + Socket.io로 채팅 만들기
              </Typography>
            </Grid>
            <Grid item>
              <StyledTypography variant="h5" component="h3">
                CSS Framewokr: material-UI 사용
              </StyledTypography>
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
              <StyledTypography variant="body1">
                <b>react</b>를 이용하여 채팅어플리케이션을 만들고 <b>Heroku</b>
                를 이용하여 배포하기
              </StyledTypography>
              <Typography variant="h5" component="h3">
                0. 디렉토리 구조
              </Typography>
              <Grid xs={11} sm={9} md={6}>
                <StyledImg
                  src="images/directory.png"
                  alt="directory"
                />
              </Grid>
              <StyledTypography variant="body1">
                  작업한 디렉토리 구조는 페이지를 담당하는 컴포넌트는 src/pages<br/>
                  header같은 레이아웃을 담당하는 컴포넌트는 src/layout<br/>
                  그 안에 가장 작은 부분부분을 담당하는 컴포넌트는 src/component에 분류하였습니다.
              </StyledTypography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h2">
                1. 환경세팅
              </Typography>
              <StyledTypography variant="body1">
                패키지 관리 툴로는 yarn을 사용하였습니다. 개인적으로 yarn이
                편해서 사용하였습니다. 이부분은 따로 설명없이 넘어가겠습니다.<br/>
                먼저 react 프로젝트 먼저 생성합니다. 그리고 하위에 server라는 폴더를 생성
              </StyledTypography>
              <StyledPre >
                npx create-react-app "이름" -template typescript
              </StyledPre>
              <Typography variant="body1">
                socket.io 설치
              </Typography>
              <StyledPre >
                yarn add socket.io
              </StyledPre>
              <Typography variant="h4" component="h3">2. 서버 생성</Typography>
              <StyledTypography variant="body1">
                앞서 만들었던 server 폴더 안에 index.js 라는 파일을 만듭니다.<br/>
                express로 서버를 구성할 것 입니다. 먼저 라이브러리를 설치해 줍니다.
              </StyledTypography>
              <StyledPre>
                yarn add express 
              </StyledPre>
              <StyledPre>
              {`//server/index.js
              
const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
}); 
const port = process.env.PORT || 3005;

server.listen(port, ()=>{
  console.log(port + "포트에서 수신중");
});`}
              </StyledPre>
              <StyledTypography variant="body1">
                위 코드 작성 후   
              </StyledTypography>
              <StyledPre>
                node server/index.js
              </StyledPre>
              <StyledTypography variant="body1">
                정상적으로 작성하셨다면 "3005포트에서 수신중" 이라는 콘솔 메시지를 확인할 수 있을 것입니다. 
              </StyledTypography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h3">3. 클라이언트 작성</Typography>
              <StyledTypography variant="body1">
                클라이언트를 작성하고 서버와 연결까지 해보겠습니다. 우선 socket.io-client를 설치해 줍니다.
              </StyledTypography>
              <StyledPre>
                yarn add socket.io-client
              </StyledPre>
              <StyledPre>
{`//src/app.tsx

import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocketClient from 'socket.io-client';

const SERVER = "localhost:3005";

function App() {
  const socket = SocketClient(SERVER);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

`}
              </StyledPre>
              <StyledTypography variant="body1">
                이제 socket 이라는 상수를 이용하여 백엔드에서 발생하는 이벤트를 받을수 있습니다.<br/>
                예시로 클라이언트가 연결되면 콘솔 메시지를 받아봅시다.
              </StyledTypography>
              <StyledPre>
              {`//server/index.js
              
const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
}); 
const port = process.env.PORT || 3005;

io.on("connection", (socket) => {
  console.log('새로운 클라이언트가 입장하였습니다.');
  socket.emit('connection');
});

server.listen(port, ()=>{
  console.log(port + "포트에서 수신중");
});`}
              </StyledPre>
              <StyledPre>
              {`//src/app.tsx

import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocketClient from 'socket.io-client';

const SERVER = "localhost:3005";

function App() {
  const socket = SocketClient(SERVER);
  socket.on("connection", () => {
    console.log("백엔드와 연결되었습니다.")
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

`}
              </StyledPre>
              <StyledTypography variant="body1">
                브라우저 콘솔에는 "백엔드와 연결되었습니다." 메시자가 출력 되어야 합니다.
                간단한 코드 몇줄로 nodejs + express로 만든 서버와 프론트(react-app)을 연결해 보았습니다.
              </StyledTypography>
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
        </StyledGrid>
      </ThemeProvider>
    );
}

const StyledImg = Styled.img`
  display: inline-block;
  width: 100%;
  padding-top: 20px;
`;
const StyledPre = Styled.pre`
  background-color: #fafafa;
  padding: 20px;
  overflow-x: auto;
`;
const StyledGrid = Styled(Grid)`
  padding: 60px 0 60px 0;
`;
const StyledTypography = Styled(Typography)`
  padding-top: 20px;
`;


export default Home;