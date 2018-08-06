import React from 'react'
import Header from '../components/Header';
import CardList from '../components/CardList';

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

      {/* <div className="Cards">
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
      </div> */}

      <CardList />

    </div>
  )
}

export default AboutPage
