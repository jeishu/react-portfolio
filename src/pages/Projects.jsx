import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
    height: 100vh;
`;

const Projects = () => {
    return (
        <>
        <ProjectsDiv>
            <h1>Projects</h1>
        </ProjectsDiv>
        <Footer />
        </>
    )
}

export default Projects;
