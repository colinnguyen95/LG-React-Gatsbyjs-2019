import React from 'react';
import Layout from '../components/layout';
import Goals from '../components/Goals/Goals';
import Work from '../components/Work/Work';
import Work1 from '../components/Work1/Work1';
import GatImg from '../components/GatImg'
import { graphql } from 'gatsby';

const divStyle = {
  width: '100%',
  height: '180px',
  margin: '0 20px',
  opacity: '0',
  animation: 'HeroAnimation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1)'
};

const IndexPage = ( { data }) => {
  return(
    <Layout>
      <GatImg 
        img={data.img.childImageSharp.fluid}
        imageLogo={require('../images/New_LG_Logo.svg')}
        style={divStyle}
      />
      <Work1 />
      <Goals />
    </Layout>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: {eq: "header_LG.jpg"}) {
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

export default IndexPage

