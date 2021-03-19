import React from 'react';
import styled from "styled-components";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";

const HomeDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 100vh;
    
    .infoContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        
        h1 {
            font-size: 3rem;
        }

        .desc2 {
            margin-bottom: 2em;
        }
    }
`;

const Home = () => {

    return (
        <>
            <HomeDiv>
                <div className="infoContainer">
                    <h1 className="intro">你好! <span>Welcome!</span></h1>
                    <p>I am <span>Jeremy</span>, Full Stack Developer and Photographer.</p>
                    <p className="desc2">I strive to learn and improve my skills every day.</p>
                    <Social />
                </div>

                <Footer />
            </HomeDiv>
        </>
    )
}

export default Home;
