import React from 'react';
import './AboutCard.css'

const AboutCard = (props) => {
  return (
    <div className="CardGroup1">
        <div className="CardWrap">
            <h3>{props.name}, </h3>
            <h6>{props.position}</h6>
            <div className="Card1">
                <img alt="team" src={props.image}/>
            </div>
            <div className="panel-collapse">
                <div className="panel-body1">
                    {props.description}
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutCard
