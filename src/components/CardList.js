import React from 'react';
import Card from './Card';
import './CardList.css'
import { teams } from '../team';

const CardList = () => {
  return (
    <div className="maaan">
      {
        teams.map((members, i) => {
          return (
            <Card
                key={i}
                name={teams[i].name}
                position={teams[i].position}
                image={teams[i].image}
            />
          );
        })
      }
    </div>
  );
}

export default CardList
