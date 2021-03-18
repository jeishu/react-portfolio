import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const ContactsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
    form {
        display: flex;
        flex-direction: column;
        
        input, label {

        }
    }
`;

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xjvpnqgl");
    if (state.succeeded) {
        return <p>Thank you for contacting me! You will get a reply very soon.</p>;
    }
    return (
        <ContactsDiv>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address: 
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
            </button>
            </form>
        </ContactsDiv>
    );
}

function Contact() {
    return (
        <ContactForm />
    );
}
export default Contact;