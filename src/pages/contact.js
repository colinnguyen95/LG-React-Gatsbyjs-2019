import React from 'react';
import Layout from '../components/layout';
import GatImg from '../components/GatImg'
import { graphql } from 'gatsby';

const ContactPage = ( { data } ) => {
  return (
    <Layout>
      <div className="Header" style={{marginBottom: 50+'px'}}>
      <GatImg
        title="Hello There!" 
        img={data.img.childImageSharp.fluid}
        alt="Contact"
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
