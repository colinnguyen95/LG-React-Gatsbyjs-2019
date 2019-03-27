import React from 'react';
import Layout from '../components/layout';
import Header1 from '../components/Header1';

const ContactPage = () => {
  return (
    <Layout>
      <div className="Header" style={{marginBottom: 50+'px'}}>
      <Header1 
        // imageLogo={require('../images/New_LG_Logo.svg')}
        title="Hello There!"
        image={require('../images/contact-header.jpg')}
      />
      </div>
    </Layout>
  )
}

export default ContactPage
