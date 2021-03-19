import React from 'react';
import styled from "styled-components";
import Social from "../Social/Social";

const FooterDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: #acacac;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: .9em;

    span {
        padding-left: 1em;
    }
    img {
        background-color: #cccccc;
        width: 20px !important;
    }
`;

const Footer = () => {
    return (
        <FooterDiv>
            <span style={{color: "rgb(255, 255, 255)"}}>Jeremy Zhu © 2020</span>
            <Social/>
        </FooterDiv>
    )
}

export default Footer;
