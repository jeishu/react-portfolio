import React from 'react';
import styled from "styled-components";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";
import "./home.scss";

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
        margin: 2rem 1rem 0rem;
        @media (min-width: 768px) {
            margin: 5rem 1rem 0rem;
        }
        
        h1 {
            font-size: 3rem;
        }
        p {
            text-align: center;
        }
        h2.home-projects {
            font-size: 1.5rem;
        }
        .desc2 {
            margin-bottom: 2em;
        }
        .name {
            font-weight: bold;
            text-decoration: underline;
        }
        .misc {
            font-weight: bold;
        }
        .line-border{
            padding: 1rem;
            border-bottom: 1px rgba(0, 0, 0, 0.165) solid;
            width: 80%;
        }
    }
`;

const Home = () => {

    return (
        <>
            <HomeDiv>
                <div className="infoContainer">
                    <h1 className="intro">你好! <span>Welcome!</span></h1>
                    <p>I am <span className="name">Jeremy</span>, <span className="misc">Full Stack Developer</span>  and <span className="misc">Photographer</span> with a passion for Web Design.</p>
                    <p className="desc2">I strive to learn and improve my skills every day.</p>
                    <Social />
                    <div className="line-border"></div>
                    <h2 className="home-projects">Check out my projects</h2>
                </div>
                <Footer />
            </HomeDiv>
        </>
    )
}

export default Home;
