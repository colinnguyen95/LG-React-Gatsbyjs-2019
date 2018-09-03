import React from 'react'
import Header1 from '../components/Header1';
import Goals from '../components/Goals';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    
    <Header1 
      imageLogo={require('../images/New_LG_Logo.svg')}
      image={require('../images/header_LG.jpg')}
    />
  
    <Work />
    
    <Goals />

    <Contact />

    <Footer />
    
  </div>
)

export default IndexPage
