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
        .infoContainer2 {
            p {
                margin: 0 2rem;
                max-width: 500px;
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
        </>
    )
}

export default About;
