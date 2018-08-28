import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div>
      <Header 
        imageLogo={require('../images/New_LG_Logo.svg')}
        image={require('../images/service-header.jpg')}
      />

      <PageTitle
        title="What We Do"
      />

      {/* <div className="ServiceGroup2">
        <div className="ServiceDesc">
          <p>Our 30+ years of combined experience in medical device marketing and a talent-diverse team bring a personalized, deadline-sensitive and flexible approach to a wide range of services.</p>
        </div>
        <div className="serviceImg">
          <img src={require('../images/lg-services.jpg')} />
        </div>
      </div> */}

      <div className="ServiceDesc">
        <p>Our 30+ years of combined experience in medical device marketing and a talent-diverse team bring a personalized, deadline-sensitive and flexible approach to a wide range of services.</p>
      </div>
      
      <div className="ListWrap">
        <ul className="ServicesList">
          <li>Branding</li>
          <li>Collateral Development</li>
          <li>Content Marketing</li>
          <li>Cross-Functional Team Leadership</li>
          <li>Customer Retention Programs</li>
          <li>Direct-to-Consumer Marketing</li>
          <li>Educational Webcasts</li>
          <li>Event/Trade Show Planning</li>
          <li>Global Marketing</li>
          <li>Graphic Design</li>
          <li>Lead Generation (Print/Online)</li>
          <li>Multi-Media Campaign Management</li>
          <li>New Product Launch</li>
          <li>Photography</li>
          <li>Program Management</li>
          <li>Practice Marketing</li>
          <li>Public Relations</li>
          <li>Social Media Marketing</li>
          <li>Strategic Planning</li>
          <li>Video Production (Promotional/Educational)</li>
          <li>Website Development</li>
        </ul>
      </div>

      <Contact />

      <Footer />


    
    </div>
  )
}

export default ServicesPage
