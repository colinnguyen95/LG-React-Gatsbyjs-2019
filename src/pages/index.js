import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header';
import Goals from '../components/Goals';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
//import Header from './Header'

const IndexPage = () => (
  <div>
    
    <Header 
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
