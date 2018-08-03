import React from 'react'
import './Card.css'

const Card = props => (
        <div className="CardGroup">
            <h3>{props.name}, {props.position}</h3>
            <div className="Card">
                <img alt="team" src={props.image}/>
            </div>
        </div>
)

export default Card
