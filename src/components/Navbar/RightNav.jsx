import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    @media (max-width: 768px) {
        transform: ${({ open }) => open ? "translatex(0)" : "translateX(100%)"}; 
    }
`;

const RightNav = ({ open }) => {
    const location = useLocation();
    return (
        <Ul open={open}>
            <li className="">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="">
                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </li>
            <li className="">
                <Link
                    to="/projects"
                    className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                    Projects
                </Link>
            </li>
            <li className="">
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
        </Ul>
    )
}

export default RightNav;
