import React from 'react'
import Header1 from '../components/Header1';
import Goals from '../components/Goals/Goals';
import Work from '../components/Work/Work';

const divStyle = {
  width: '100%',
  height: '180px',
  margin: '0 20px',
  opacity: '0',
  animation: 'HeroAnimation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1)'
};

const IndexPage = () => {
  return(
    <div>
      <Header1 
        imageLogo={require('../images/New_LG_Logo.svg')}
        style={divStyle}
        // image={require('../images/header_LG.jpg')}
      />
    
      <Work />

      
      <Goals />
    </div>
  )
}

export default IndexPage

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
