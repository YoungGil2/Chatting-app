import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

interface sideMenuProps {
    menuStatus: boolean;
}

function SideMenu({menuStatus}:sideMenuProps){
    return (
        <>
        <Hidden smUp>
            <Drawer variant="temporary" anchor="left">
                <div>
                    <Link to="/">홈</Link><br/>
                    <Link to="/join">입장하기</Link><br/>
                </div>
            </Drawer>
        </Hidden>
        <Hidden xsDown>
            <Drawer variant="permanent" anchor="left">
                <div>
                    <Link to="/">홈</Link><br/>
                    <Link to="/join">입장하기</Link><br/>
                </div>
            </Drawer>
        </Hidden>
       
        </>
    );
}
export default SideMenu;