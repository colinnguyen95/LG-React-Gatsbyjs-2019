import React from 'react';
import Card from './Card';
import './CardList.css'
import { teams } from '../team';

const crabs = "cool";

const cardArray = teams.length;

const CardList = () => {
  return (
    <div className="aboutSection">
    {/* <p>{crabs}</p>
    <p>{cardArray}</p> */}
      {
        teams.map((members, i) => {
          return (


            <Card
                // className="TA"
                key={i}
                name={teams[i].name}
                position={teams[i].position}
                image={teams[i].image}
                description={teams[i].description}
            />
          );
        })
      }
    </div>
  );
}

export default CardList
