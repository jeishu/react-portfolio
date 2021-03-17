import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import Burger from './Burger';
import Logo from "../../img/jzhu_logo.svg";

function NavTabs() {

    const location = useLocation();

    return (
        <div className="nav-bar">
            <div className="">
                <img src={Logo} />Jeremy Zhu
            </div>
            <Burger />
        </div>
    );
}

export default NavTabs;
