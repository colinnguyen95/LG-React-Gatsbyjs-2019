import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <div className="Header" style={{marginBottom: 50+'px'}}>
      <Header 
        imageLogo={require('../images/New_LG_Logo.svg')}
        image={require('../images/contact-header.jpg')}
      />
      </div>

      <Contact />

      <Footer />
      
    </div>
  )
}

export default ContactPage
