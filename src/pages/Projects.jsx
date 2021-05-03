import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
import PorfolioContext from "../utils/PortfolioContext";
import ZP from "../img/projects/zombieparent.png";
import FT from "../img/projects/finance.png";
import DS from "../img/projects/dungeon.png";
import RU from "../img/projects/user.png";
import P from "../img/projects/persona.png";

import "./scss/projects.scss";

const ProjectsDiv = styled.div``;

const Projects = () => {
    const projects = [
        {
            name: "Zombie Parent",
            repo: "https://github.com/jeishu/zombie-parent",
            deploy: "https://zombie-parent.herokuapp.com/",
            description: "Allows parents or caretakes to log and gather data for their babies.",
            role: "My role was to create a PWA design with mobile first design. Created with a sleek and simple design for easy to access for tired parents.",
            image: ZP
        },
        {
            name: "Dungeon Scribe",
            repo: "https://github.com/jeishu/dungeon_scribe",
            deploy: "https://dungeon-scribe.herokuapp.com/",
            description: "An application with live chatroom as the main feature for users to chat live with other users.",
            role: "My role was to design a desktop first with Neurmorphism design trend.",
            image: DS
        },
        {
            name: "React User Directory",
            repo: "https://github.com/jeishu/reactive-user-directory",
            deploy: "https://reactive-user-directory.herokuapp.com/",
            description: "An application made to help organize user directory into name, email, and phone.",
            role: "Full Stack, designed with Glassmorphism trend in mind and with mobile first design.",
            image: RU
        },
        {
            name: "Finance Tracker",
            repo: "https://github.com/jeishu/finance-tracker",
            deploy: "https://glassmorphism-finance-tracker.herokuapp.com/",
            description: "An application made to record user's finances for online and offline uses.",
            role: "Full Stack, Glassmorphism design with mobile first design",
            image: FT
        },
        // {
        //     name: "Jot That Down",
        //     repo: "https://github.com/jeishu/jot-that-down",
        //     deploy: "https://jot-that-down.herokuapp.com/",
        //     description: "An application that can record the user's notes and can be saved to be view in a later time.",
        //     role: ""
        // },
        {
            name: "Persona: Freelance Website",
            repo: "https://github.com/jeishu/Persona",
            deploy: "https://jonesliddy77.github.io/Persona/",
            description: "This was a mock up of what a freelancer's website would be.",
            role: "My role for this website is Frontend, I created a mock website of a freelancer website. Design is desktop first, two page html with working JS.",
            image: P
        }
    ];

    return (
        <PorfolioContext.Provider value={projects}>
            <ProjectsDiv className="projectsDiv">
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
