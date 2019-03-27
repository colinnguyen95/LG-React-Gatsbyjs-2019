import React from 'react';
import Layout from '../components/layout';
import Header1 from '../components/Header1';

const ServicesPage = () => {
  return (
    <Layout>
      <Header1 
        title="What We Do"
        image={require('../images/service-header.jpg')}
      />

      {/* <PageTitle
        title="What We Do"
      /> */}

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
      <div className="ServicesList">
        <div className="Container">
          <ul>
            <li>Branding</li>
            <li>Collateral Development</li>
            <li>Content Marketing</li>
            <li>Cross-Functional Team Leadership</li>
            <li>Customer Retention Programs</li>
            <li>Direct-to-Consumer Marketing</li>
            <li>Educational Webcasts</li>
          </ul>
          <ul>
            <li>Event/Trade Show Planning</li>
            <li>Global Marketing</li>
            <li>Graphic Design</li>
            <li>Lead Generation (Print/Online)</li>
            <li>Multi-Media Campaign Management</li>
            <li>New Product Launch</li>
            <li>Photography</li>
          </ul>
          <ul>
            <li>Program Management</li>
            <li>Practice Marketing</li>
            <li>Public Relations</li>
            <li>Social Media Marketing</li>
            <li>Strategic Planning</li>
            <li>Video Production</li>
            <li>Website Development</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
