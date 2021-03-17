import React from 'react';
import styled from "styled-components";

const ContactsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
`;

const Contact = () => {
    return (
        <ContactsDiv>
            <h1>Contact</h1>
        </ContactsDiv>
    )
}

export default Contact;
