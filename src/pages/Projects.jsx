import React from 'react'
import styled from "styled-components";

const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
`;

const Projects = () => {
    return (
        <ProjectsDiv>
            <h1>Projects</h1>
        </ProjectsDiv>
    )
}

export default Projects;
