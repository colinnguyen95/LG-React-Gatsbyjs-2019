import React from 'react'
import BackgroundImage from 'gatsby-background-image'
// import PageTitle from './PageTitle/PageTitle'
import Scroller from '../Scroller/Scroller'
import styled from 'styled-components'

// const BackgroundImage1 = styled(BackgroundImage)`
//     background: linear-gradient(
//         rgba(20,20,20, .57),
//         rgba(20,20,20, .70),
//         rgba(20,20,20, .6));
//     opacity: 1 !important;
//     object-fit: cover;
//     object-position: 50% 50%;
//     background-repeat: no-repeat;
//     height: 550px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     @media (min-width: 320px) and (max-width: 480px) {
//         height: 400px;
//     }

//     @media (min-width: 481px) and (max-width: 1024px) {
//         height: 500px;
//     }

//     @media (min-width: 768px) and (max-width: 1024px) {
//         height: 500px;
//       }
// `

// const BackgroundImageContainer = styled.div`
//     height: 550px;
//     width: 100%;
//     display: block !important;
//     margin: 0 auto !important;

//     ${'' /* display: flex;
//     align-items: center;
//     justify-content: center; */}
// `

// const HeaderLogo = styled.img`
//     ${'' /* height: 170px;
//     width: 100%;
//     margin: 0 20px;
//     opacity: 0;
//     animation: HeroAnimation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */}
// `

// export default function BackgroundSection( {img, styleClass, title, children } ) {
//     return (
//         <BackgroundImage 
//             className={styleClass}
//             fluid={img}
//         >
//         <h1>Hello</h1>
//             {children}
    
            

//         </BackgroundImage>
//     );
// }

const BackgroundSection = ( props ) =>(
    // <div className='random-div'>
        <BackgroundImage 
            className={props.styleClass}
            fluid={props.img}
            // style={{
            //     height: 550,
            //     left: 0,
            //     top: 0,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center'
            // }}
        >
            {/* <HeaderLogo src={props.imageLogo} style={props.style}/> */}
            <Scroller />

            

        </BackgroundImage>
    // </div>
)

export default BackgroundSection