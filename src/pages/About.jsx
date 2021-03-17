import React from 'react';
import profile from "../img/profilepic.png";
import styled from "styled-components";

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;

    img{
        width: 200px;
        height: auto;
    }

`;

const About = () => {
    return (
        <AboutDiv>
            <h1>About Me</h1>
            <img src={profile} alt={profile}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum laborum vero laudantium delectus accusamus explicabo unde eaque voluptatem, debitis quisquam, quia, eligendi facere culpa porro impedit possimus. Quia, sunt?</p>
        </AboutDiv>
    )
}

export default About;
