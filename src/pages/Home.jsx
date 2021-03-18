import React from 'react';
import styled from "styled-components";
import Social from "../components/Social/Social";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;

    .desc2 {
        margin-bottom: 2em;
    }
`;

const Home = () => {
    
    return (
        <HomeDiv>
            <h1 className="intro">你好! <span>Welcome!</span></h1>
            <p>I am <span>Jeremy</span>, Full Stack Developer and Photographer.</p>
            <p className="desc2">I strive to learn and improve my skills every day.</p>
            <Social />
        </HomeDiv>
    )
}

export default Home;
