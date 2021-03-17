import React from 'react';
import styled from "styled-components";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
`;

const Home = () => {
    
    return (
        <HomeDiv>
            <h1>Jeremy Zhu</h1>
            <p>I am a Full Stack Developer</p>
        </HomeDiv>
    )
}

export default Home;
