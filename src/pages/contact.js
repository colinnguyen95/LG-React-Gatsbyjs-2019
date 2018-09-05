import React from 'react'
import Header1 from '../components/Header1';

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
    </div>
  )
}

export default ContactPage
