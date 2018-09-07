import React from 'react';
import AboutCard from './AboutCard';
import './AboutList.css'
import { teams } from '../team';

const AboutList = () => {
  return (
    <div className="AboutSection">
      <div className="AboutContainer">
        {
          teams.map((members, i) => {
            return (
              <AboutCard
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

export default AboutList
