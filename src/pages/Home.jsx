import React from 'react';
import styled from "styled-components";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";


const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 2rem;
    height:100vh;

    .desc2 {
        margin-bottom: 2em;
    }
`;

const Home = () => {
    
    return (
        <>
        <HomeDiv>
            <h1 className="intro">你好! <span>Welcome!</span></h1>
            <p>I am <span>Jeremy</span>, Full Stack Developer and Photographer.</p>
            <p className="desc2">I strive to learn and improve my skills every day.</p>
            <Social />
        </HomeDiv>
        <Footer />
        </>
    )
}

export default Home;
