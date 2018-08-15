import React from 'react'
import './Card.css'

const Card = props => {
    return(
        <div className="CardGroup">
            <h3>{props.name}, </h3>
            <h6>{props.position}</h6>
            <div className="Card">
                <img alt="team" src={props.image}/>
            </div>
        </div>
    );
}

export default Card
