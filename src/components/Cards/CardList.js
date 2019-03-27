import React from 'react';
import Card from './card';
import './CardList.css'
import { teams } from '../../team';

const CardList = () => {
  return (
    <div className="aboutSection">
      <div className="aboutContainer">
        {
          teams.map((members, i) => {
            return (
              <Card
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
    </div>
  );
}

export default CardList
