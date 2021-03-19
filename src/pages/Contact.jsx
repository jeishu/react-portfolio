import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";

const ContactsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 100vh;
    
    .contactContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;

        form {
            display: flex;
            flex-direction: column;
            width: 300px;

            input, textarea {
                outline: none;
                border: none;
                margin-bottom: 1rem;
            }
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
            <div className="contactContainer">
                <h1>Contact Me</h1>
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
            </div>
            <Footer />
        </ContactsDiv>
    );
}

function Contact() {
    return (
        <>
        <ContactForm />
        </>
    );
}
export default Contact;