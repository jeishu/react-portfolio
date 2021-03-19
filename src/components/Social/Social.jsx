import React from 'react';
import Instagram from "../../img/social/instagram.svg";
import Linkedin from "../../img/social/linkedin.svg";
import Github from "../../img/social/github.svg";
import styled from 'styled-components';

const SocialDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 50%;
    transition: .4s all ease-in;
    
    a {
        &:hover img {
            background-color: rgba(80, 80, 80, 0.344);
        }

        img {
            width: 25px;
            height: auto;

            &:hover {
                transform: translate(-1px, 1px) rotate(2deg);
            }
        }
    } 
`;

const Social = () => {
    return (
        <SocialDiv className="socialContainer">
            <a href="https://www.instagram.com/jeremyishungry/" target="_blank" rel="noreferrer">
                <img src={Instagram} alt={Instagram} />
            </a>
            <a href="https://www.linkedin.com/in/jeremy-zhu/" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt={Linkedin} />
            </a>
            <a href="https://github.com/jeishu" target="_blank" rel="noreferrer">
                <img src={Github} alt={Github} style={{borderRadius: "15px"}}/>
            </a>
        </SocialDiv>
    )
}

export default Social;
