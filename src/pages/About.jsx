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
        margin: 0rem 1rem 0rem;
        @media (min-width: 768px) {
            margin: 5rem 1rem 0rem;
        }

        .infoContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            @media (min-width: 768px){
                flex-direction: row;

                .info {
                    width: 300px;
                }
            }

            .info {
                h2, h4 {
                    text-align: center;
                    margin: 0 0 .5rem;
                }
                p {
                    margin: 0 2rem;
                    max-width: 500px;
                }
            }
            
            img {
                width: 200px;
                height: auto;
            }
        }
    }
`;

const About = () => {
    return (
        <>
            <AboutDiv>
                <div className="aboutContainer">
                    <h1>About Me</h1>
                    <div className="infoContainer">
                        <img src={profile} alt={profile} />
                        <div className="info">
                            <h2>Jeremy Zhu</h2>
                            <h4>Full Stack Developer</h4>
                            <p>I am a student web developer at the University of Texas at Austin Bootcamp. Graduated from UT Austin with bachelors degree of Asian Studies and a minor in Business. During my free time, I am a photographer within the Austin, Texas area.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </AboutDiv>
        </>
    )
}

export default About;
