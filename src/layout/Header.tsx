import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from "@material-ui/core/Grid";
import { Link as DomLink} from "react-router-dom";

function Header(){
    let menuWidth = 200;
    const [meunOpen, setMeunOpen] = useState(false);
    const SideMenuToggle = () => {
        setMeunOpen((prevState)=> (!prevState));
    };

    const ListContent = (
        <List style={{ width: menuWidth}}>
            <ListItem>
                <ListItemText>
                    <Link component={DomLink} to="/" onClick={SideMenuToggle}>홈</Link>
                </ListItemText>
            </ListItem>
            <Divider></Divider>
            <ListItem>
                <ListItemText>
                    <Link component={DomLink} to="/join" onClick={SideMenuToggle}>입장하기</Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    {/* <Link component={DomLink} to="/join" onClick={SideMenuToggle}>방 리스트보기</Link> */}
                    <Link onClick={()=> alert("준비중입니다.")}>방 리스트</Link>
                </ListItemText>
            </ListItem>
        </List>
    );
    return(
        <AppBar position="static">
            <ToolBar>  
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <IconButton onClick={SideMenuToggle} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="span" style={{ paddingLeft: 12}}>채팅 어플리케이션</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton edge="end" target="_blank" href="https://github.com/yeong-gil/Chatting-app" color="inherit">
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                </Grid>            
            </ToolBar>
            <Drawer variant="temporary" open={meunOpen} onClose={SideMenuToggle}>
                {ListContent}
            </Drawer>
        </AppBar>
    )
}
export default Header;