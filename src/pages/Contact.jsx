import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";
import ContactCard from "../components/ContactCard/index";

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
        margin: 0rem 1rem 0rem;
        @media (min-width: 768px) {
            margin: 5rem 1rem 0rem;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 300px;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(121, 121, 121, 0.261);

            input, textarea {
                outline: none;
                border: none;
                margin: .25rem auto 1rem;
                width: 280px;
                border-radius: 5px;
                padding: .5rem;
            }
            textarea {
                height: 150px;
            }
            button {
                cursor: pointer;
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
                <ContactCard/>
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