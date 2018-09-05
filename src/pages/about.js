import React from 'react'
import Header1 from '../components/Header1';
import CardList from '../components/CardList';

const AboutPage = () => {
  return (
    <div>
      <Header1 
        title="Who We Are"
        image={require('../images/contact_lg.jpg')}
      />
      
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
