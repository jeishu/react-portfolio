import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";
import ContactCard from "../components/ContactCard/index";
import "./scss/contact.scss";

const ContactsDiv = styled.div``;

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xjvpnqgl");
    if (state.succeeded) {
        return <p>Thank you for contacting me! You will get a reply very soon.</p>;
    }
    return (
        <ContactsDiv className="contactDiv">
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
        <ContactForm />
    );
}
export default Contact;