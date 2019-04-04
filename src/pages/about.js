import React from 'react';
import Layout from '../components/layout';
import Header1 from '../components/Header1';
import AboutCard from '../components/About/AboutCard';
import GatImg from '../components/GatImg'
import { graphql } from 'gatsby';
// import CardList from '../components/CardList';

const AboutPage = ( { data } ) => {
  return (
    <Layout>
      {/* <Header1 
        title="Who We Are"
        image={require('../images/about_LG.jpg')}
      /> */}
      <GatImg
        title="Who We Are" 
        img={data.img.childImageSharp.fluid}
        // style={{
        //   width: "100%",
        //   height: "155%",
        //   position: "absolute",
        //   left: 0,
        //   top: 0,
        // }}
      />
      <AboutCard />
      {/* Use CardList Component when LG team gives green light */}
      {/* <CardList /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: {eq: "about_LG.jpg"}) {
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

export default AboutPage
