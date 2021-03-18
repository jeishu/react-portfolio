import React from 'react';
import profile from "../img/profilepic.png";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
    height: 100vh;

    h1 {
       
    }
    img {
        width: 200px;
        height: auto;
    }

`;

const About = () => {
    return (
        <>
        <AboutDiv>
            <h1>About Me</h1>
            <img src={profile} alt={profile}/>
            <h2>Jeremy Zhu</h2>
            <h4>Full Stack Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum laborum vero laudantium delectus accusamus explicabo unde eaque voluptatem, debitis quisquam, quia, eligendi facere culpa porro impedit possimus. Quia, sunt?</p>
        </AboutDiv>
        <Footer />
        </>
    )
}

export default About;
