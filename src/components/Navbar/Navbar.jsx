import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import Burger from './Burger';

function NavTabs() {

    const location = useLocation();

    return (
        <div className="nav-bar">
            <div className="logo">
                Jeremy Zhu
            </div>
            <Burger />
        </div>
    );
}

export default NavTabs;
