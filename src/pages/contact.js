import React from 'react';
import Layout from '../components/layout';
import Header1 from '../components/Header1';
import GatImg from '../components/GatImg'
import { graphql } from 'gatsby';

const ContactPage = ( { data } ) => {
  return (
    <Layout>
      <div className="Header" style={{marginBottom: 50+'px'}}>
      {/* <Header1 
        // imageLogo={require('../images/New_LG_Logo.svg')}
        title="Hello There!"
        image={require('../images/contact-header.jpg')}
      /> */}
      <GatImg
        title="Hello There!" 
        img={data.img.childImageSharp.fluid}
      />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: {eq: "contact-header.jpg"}) {
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

export default ContactPage
