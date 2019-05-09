import React from 'react';
import Layout from '../components/layout';
import GatImg from '../components/GatImg'
import { graphql } from 'gatsby';

const ServicesPage = ( { data } ) => {
  return (
    <Layout>
      <GatImg
        title="What We Do" 
        img={data.img.childImageSharp.fluid}
      />
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

export const query = graphql`
  query {
    img: file(relativePath: {eq: "service-header.jpg"}) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100, maxWidth: 2048) {
              ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ServicesPage
