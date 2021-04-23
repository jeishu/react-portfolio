import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
import PorfolioContext from "../utils/PortfolioContext";
import DS from "../img/projects/dungeonscribe.png";
import RUD from "../img/projects/rud.png";
import FT from "../img/projects/financetracker.png";
import JTD from "../img/projects/jotthatdown.png";
import Persona from "../img/projects/persona.png";

const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 100vh;

    .projectContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0rem 1rem 0rem;
        @media (min-width: 768px) {
            margin: 5rem 1rem 0rem;
        }
    }
`;

const Projects = () => {
    const projects = [
        {
            name: "Dungeon Scribe",
            repo: "https://github.com/jeishu/dungeon_scribe",
            deploy: "https://dungeon-scribe.herokuapp.com/",
            image: DS,
            description: "An application with live chatroom as the main feature for users to chat live with other users.",
        },
        {
            name: "React User Directory",
            repo: "https://github.com/jeishu/reactive-user-directory",
            deploy: "https://reactive-user-directory.herokuapp.com/",
            image: RUD,
            description: "An application made to help organize user directory into name, email, and phone.",
        },
        {
            name: "Finance Tracker",
            repo: "https://github.com/jeishu/finance-tracker",
            deploy: "https://glassmorphism-finance-tracker.herokuapp.com/",
            image: FT,
            description: "An application made to record user's finances for online and offline uses.",
        },
        {
            name: "Jot That Down",
            repo: "https://github.com/jeishu/jot-that-down",
            deploy: "https://jot-that-down.herokuapp.com/",
            image: JTD,
            description: "An application that can record the user's notes and can be saved to be view in a later time.",
        },
        {
            name: "Persona: Freelance Website",
            repo: "https://github.com/jeishu/Persona",
            deploy: "https://jonesliddy77.github.io/Persona/",
            image: Persona,
            description: "This was a mock up of what a freelancer's website would be.",
        }
    ];

    return (
        <PorfolioContext.Provider value={projects}>
        <ProjectsDiv>
            <div className="projectContainer">
                <h1>Projects</h1>
                <Cards/>
            </div>
            <Footer />
        </ProjectsDiv>
        </PorfolioContext.Provider>
    )
}

export default Projects;
