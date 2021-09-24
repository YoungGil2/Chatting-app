import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideMenu";

function Layout(){
    const [open, setOpen] = useState(false);
    return (
        <>
            <Header menuOpen={setOpen} />
            <SideBar menuStatus={open}/>
        </>
    );
}
export default Layout;