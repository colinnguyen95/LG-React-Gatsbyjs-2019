import React from 'react';
import Layout from '../components/Layout';
import Header1 from '../components/Header1';
import Goals from '../components/Goals/Goals';
import Work from '../components/Work/Work';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
// import './index.css'; 

const divStyle = {
  width: '100%',
  height: '180px',
  margin: '0 20px',
  opacity: '0',
  animation: 'HeroAnimation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1)'
};

const IndexPage = () => {
  return(
    <Layout>
      <Header1 
        imageLogo={require('../images/New_LG_Logo.svg')}
        style={divStyle}
        image={require('../images/header_LG.jpg')}
        // image={data.img1.childImageSharp.fluid}
      />
    
      <Work />

      
      <Goals />
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
//   query {
//     img1: file(relativePath: {eq: "header_LG.jpg"}) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 500) {
//               ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

// class IndexPage extends React.Component {
//   constructor(props) {
//       super(props)

//       this.state = {
//           loaded: false
//       }
//   }

//   onLoad(feedItem) {
//     this.setState(({ loadedItems }) => {
//       return { loadedItems: loadedItems.concat(feedItem) }
//     })
//   }

//   // componentDidMount() {
//   //     window.addEventListener('scroll', 
//   //     this.handleScroll)
//   // }
//   render() {
//     const { source, placeholderColor } = this.props
//     return(
//       <div>
//         <Header1 
//           imageLogo={require('../images/New_LG_Logo.svg')}
//           style={divStyle}
//           image={require('../images/header_LG.jpg')}
//         />
      
//         <Work />

        
//         <Goals />
//       </div>
//     )
//   }
// }

// export default IndexPage
