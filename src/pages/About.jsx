import React from 'react';
import profile from "../img/profilepic.png";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import "./scss/about.scss";

const AboutDiv = styled.div``;

const About = () => {
    return (
        <AboutDiv className="aboutDiv">
            <div className="aboutContainer">
                <h1>About Me</h1>
                <div className="infoContainer">
                    <img src={profile} alt={profile} />
                    <div className="info">
                        <h2>Jeremy Zhu</h2>
                        <h4>Full Stack Developer</h4>
                        <p>I am a full stack developer graduated at the University of Texas at Austin along with a bachelors degree of Asian Studies and a minor in Business. During my free time, I am a photographer within the Austin, Texas area.</p>
                        
                    </div>
                </div>
                <div className="infoContainer2">
                    <br/>
                    <p>During my time period within the Full Stack Developer Bootcamp at UT, I gain a passion for web design. Creating websites, designing websites, learning new way to make the web look cool. I picked up HTML and CSS as my basics, then my interest towards SASS and REACT. I'm always on the look out to learn new ways to interact with the web and as well as any type of techniques.</p>
                </div>
                <div className="infoContainer2">
                    <br/>
                    <p>Aside from being a web developer, I am also a photographer, diving deep into learning cinemtography. I picked up photography as a hobby during my junior year college. While learning photography, I learned how to use Lightroom and Photoshop to manipulate photos, retouch photos, and a way to express my ideas.</p>
                    <br/>
                </div>
            </div>
            <Footer />
        </AboutDiv>
    )
}

export default About;
