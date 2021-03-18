import React from 'react';
import styled from "styled-components";

const FooterDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: #acacac;
    text-align: left;
    display: flex;
    align-items: center;
    font-size: .7em;
    position: absolute;
    top: 100%;

    span {
        padding-left: 1em;
    }
`;

const Footer = () => {
    return (
        <FooterDiv>
            <span style={{color: "rgb(255, 255, 255)"}}>Jeremy Zhu</span> <span style= {{color:"white"}}>© 2020</span>
        </FooterDiv>
    )
}

export default Footer;
