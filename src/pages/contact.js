import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header';

const ContactPage = () => {
  return (
    <div>
      <div className="Header">
      <Header 
        imageLogo={require('../images/New_LG_Logo.svg')}
        image={require('../images/contact_lg.jpg')}
      />
    </div>
    
    </div>
  )
}

export default ContactPage
