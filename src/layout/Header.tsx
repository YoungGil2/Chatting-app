import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography";

function Header(){
    return(
        <AppBar position="static">
            <ToolBar>
                <Typography variant="h6">react</Typography>
            </ToolBar>
        </AppBar>
    )
}
export default Header;