import React from 'react';
import "./style.scss";

const ContactCard = () => {
    return (
        <div className="contactCard">
            <h2>Let's work together!</h2>
            <div className="card">
                <i className="fa fa-location-arrow"></i>
                <a href="#">Austin, Texas</a>
            </div>
            <div className="card">
                <i class="far fa-file"></i>
                <a href="https://docs.google.com/document/d/1W4ePMpB-R8SfyaKqs2IAgnlIZpRC5difvTU5ZgchnQ8/edit?usp=sharing" target="_blank">Resume</a>
            </div>
            <div className="card">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/jeremy-zhu/" target="_blank">Jeremy Zhu</a>
            </div>
            <div className="card">
                <i class="fab fa-github"></i>
                <a href="https://github.com/jeishu" target="_blank">Jeishu</a>
            </div>
            <div className="card">
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/jeremyishungry/" target="_blank">jeremyishungry</a>
            </div>
        </div>
    )
}

export default ContactCard;
