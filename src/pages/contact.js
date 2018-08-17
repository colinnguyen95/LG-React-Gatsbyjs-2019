import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <div className="Header">
      <Header 
        imageLogo={require('../images/New_LG_Logo.svg')}
        image={require('../images/contact_lg.jpg')}
      />
      </div>

      <Contact />

      <Footer />
      
    </div>
  )
}

export default ContactPage
