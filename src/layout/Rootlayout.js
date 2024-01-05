import React from "react";
import Menubar from "../pages/Menubar";
import { Outlet } from "react-router-dom";
function Rootlayout(){
    return(
        <>
        <Menubar/>
        <Outlet/>
        </>
    );

}
export default Rootlayout;