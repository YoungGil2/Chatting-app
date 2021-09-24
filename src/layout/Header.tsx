import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from "@material-ui/core/Hidden";

interface headerProps {
    menuOpen: (value)=> void;
}

function Header( { menuOpen }: headerProps){
    const SideMenuToggle = () => {
        menuOpen((prevState) =>(
            !prevState
        ));
    };
    return(
        <AppBar position="static">
            <ToolBar>
                    <Hidden mdUp>
                        <IconButton onClick={SideMenuToggle} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                <Typography variant="h6">채팅 어플리케이션</Typography>
            </ToolBar>
        </AppBar>
    )
}
export default Header;