import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import { teams } from '../team';

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
        <Card 
          name={teams[0].name}
          position={teams[0].position}
          image={require('../images/about-resize.jpg')}
        />

        <Card 
          name={teams[0].name}
          position={teams[0].position}
          image={require('../images/about-resize.jpg')}
        />
      </div>

    </div>
  )
}

export default AboutPage
