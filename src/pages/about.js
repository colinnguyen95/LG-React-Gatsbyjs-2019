import React from 'react'
import Header1 from '../components/Header1';
// import Header2 from '../components/Header2';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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

      <Contact />

      <Footer />

    </div>
  )
}

export default AboutPage
