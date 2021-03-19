import React, { useContext } from 'react';
import styled from 'styled-components';
import Code from "../../img/social/programming.svg";
import Deploy from "../../img/social/rocket.svg";
import PorfolioContext from "../../utils/PortfolioContext";

const CardDiv = styled.div`
    
    .card {
        display: flex;
        flex-direction: row;
        margin: 1rem;
        width: 330px;
        height: 100px;
        border: 1px solid black;
        border-radius: 10px;

        .projectImage {
            margin: .5rem;
            border-radius: 10px;
        }

        .info {
            h2 {
                margin: 0;
                font-size: 1.2rem;
            }
            p {
                margin: 0;
                font-size: 0.8rem;
            }
            .linkContainer {
                display: flex;
                flex-direction: row;
                width: 50px;
                height: auto;
                margin: .5rem;

                a {
                    text-decoration: none;
                    margin: .2rem;
                    .linkImage {
                        width: 15px;
                        height: auto;
                    }
                }
            } 
        }
         
    }
`;

const Cards = () => {
    const data = useContext(PorfolioContext);

    return (
        <CardDiv>
            {data.map(({ name, repo, deploy, image, description }) => {
                return (
                    <div className="card">
                        <img src={image} alt={image} className="projectImage" />
                        <div className="info">
                            <h2>{name}</h2>
                            <p>{description}</p>
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
