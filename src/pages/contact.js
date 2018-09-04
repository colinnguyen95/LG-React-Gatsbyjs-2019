import React from 'react'
import Header1 from '../components/Header1';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <div className="Header" style={{marginBottom: 50+'px'}}>
      <Header1 
        // imageLogo={require('../images/New_LG_Logo.svg')}
        title="Hello There!"
        image={require('../images/contact-header.jpg')}
      />
      </div>

      <Contact />

      <Footer />
      
    </div>
  )
}

export default ContactPage
