import React, { useContext } from 'react';
import styled from 'styled-components';
import Code from "../../img/social/programming.svg";
import Deploy from "../../img/social/rocket.svg";
import PorfolioContext from "../../utils/PortfolioContext";
import "./index.scss";

const CardDiv = styled.div``;

const Cards = () => {
    const data = useContext(PorfolioContext);

    return (
        <CardDiv className="cardDiv">
            {data.map(({ name, repo, deploy, image, description, role }) => {
                return (
                    <div className="card">

                        <div className="image">
                            <img src={image} alt={image} className="projectImage" />
                        </div>
                        
                        <div className="info">
                            <h2>{name}</h2>
                            <div className="infoBox">
                                <p><span>Description: </span>{description}</p>
                                <p><span>Role: </span>{role}</p>
                            </div>
                            <div className="linkContainer">
                                <a href={repo} target="_blank" rel="noreferrer">
                                    <img className="linkImage" src={Code} alt={Code} />
                                </a>
                                <a href={deploy} target="_blank" rel="noreferrer">
                                    <img className="linkImage" src={Deploy} alt={Deploy} />
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </CardDiv>
    )
}

export default Cards;
