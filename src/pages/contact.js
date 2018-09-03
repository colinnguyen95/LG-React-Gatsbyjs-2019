import React from 'react'
import Header2 from '../components/Header2';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <div className="Header" style={{marginBottom: 50+'px'}}>
      <Header2 
        // imageLogo={require('../images/New_LG_Logo.svg')}
        title="Hello!"
        image={require('../images/contact-header.jpg')}
      />
      </div>

      <Contact />

      <Footer />
      
    </div>
  )
}

export default ContactPage
