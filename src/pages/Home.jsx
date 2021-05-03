import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";
import "./scss/home.scss";

const HomeDiv = styled.div``;

const Home = () => {
    const location = useLocation();

    return (
        <HomeDiv className="homeDiv">
            <div className="infoContainer">
                <h1 className="intro">你好! <span>Welcome!</span></h1>
                <p>I am <span className="name">Jeremy</span>, <span className="misc">Full Stack Developer</span>  and <span className="misc">Photographer</span> with a passion for Web Design.</p>
                <p className="desc2">I strive to learn and improve my skills every day.</p>
                <Social />
                <Link
                    to="/contact"
                    id="contactHomeBtn"
                    className={location.pathname === "/contact"}>
                    Contact Me
                </Link>
                <div className="line-border"></div>
            </div>
            {/* <div className="info-projects">
                <h2>What do I do?</h2>

            </div> */}
            <Footer />
        </HomeDiv>
    )
}

export default Home;
