import React from 'react';
import profile from "../img/profilepic.png";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 100vh;

    .aboutContainer {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;

        p {
            margin: 2rem;
            max-width: 500px;
        }
        img {
            width: 200px;
            height: auto;
        }
    }
`;

const About = () => {
    return (
        <>
            <AboutDiv>
                <div className="aboutContainer">
                    <h1>About Me</h1>
                    <img src={profile} alt={profile} />
                    <h2>Jeremy Zhu</h2>
                    <h4>Full Stack Developer</h4>
                    <p>I am a student web developer at the University of Texas at Austin Bootcamp. Graduated from UT Austin with bachelors degree of Asian Studies and a minor in Business. During my free time, I am a photographer within the Austin, Texas area.</p>
                </div>
                <Footer />
            </AboutDiv>
        </>
    )
}

export default About;
