import React from 'react'
import './Card.css'

const Card = props => {
    return(
        <div className="CardGroup">
            <div className="CardCenter">
                <h3>{props.name}, </h3>
                <h6>{props.position}</h6>
                <div className="Card">
                    <div className="overlay"></div>
                    <img alt="team" src={props.image}/>
                </div>

                <div className="AboutText">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card
