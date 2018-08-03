import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import { teams } from '../team';
import '../components/Card.css'

const AboutPage = () => {
  return (
    <div>
        <Header 
        imageLogo={require('../images/New_LG_Logo.svg')}
        image={require('../images/contact_lg.jpg')}
      />
      
      <div className="aboutTitleWrap">
        <h1 className="aboutTitle">Our Team!</h1>
      </div>

      <div className="Cards">
        {
          teams.map((member, i) => {
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

    </div>
  )
}

export default AboutPage
