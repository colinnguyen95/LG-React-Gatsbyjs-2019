import React from 'react'
import Header1 from '../components/Header1';
import Goals from '../components/Goals';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const divStyle = {
  width: '100%',
  height: '170px',
  margin: '0 20px'
};

const IndexPage = () => (
  <div>
    <Header1 
      imageLogo={require('../images/New_LG_Logo.svg')}
      style={divStyle}
      image={require('../images/header_LG.jpg')}
    />
  
    <Work />
    
    <Goals />

    <Contact />

    <Footer />
  </div>
)

export default IndexPage
