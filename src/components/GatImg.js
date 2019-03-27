import React from 'react'
import Img from 'gatsby-image';
import Scroller from './Scroller/Scroller'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    height: 550px;
    width: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(
    rgba(20,20,20, .57),
    rgba(20,20,20, .70),
    rgba(20,20,20, .6));
    opacity: 1 !important;
    justify-content: center;
    background-position: center;
    overflow: hidden;
    position: relative;

     @media (min-width: 320px) and (max-width: 480px) {
         height: 400px;
     }

     @media (min-width: 481px) and (max-width: 1024px) {
         height: 500px;
     }

     @media (min-width: 768px) and (max-width: 1024px) {
         height: 500px;
    }
`

const HeaderLogo = styled.img`
    ${'' /* height: 170px;
    width: 100%;
    margin: 0 20px;
    opacity: 0;
    animation: HeroAnimation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */}
`

const GatImg = ( props ) =>(
    <HeaderWrapper>
        <Img 
            fluid={props.img}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: -1
            }}
        />

        <HeaderLogo src={props.imageLogo} style={props.style}/>
        <Scroller />
    </HeaderWrapper>
    // <div className='random-div'>
        // <BackgroundImage 
        //     className={props.styleClass}
        //     fluid={props.img}
        //     // style={{
        //     //     height: 550,
        //     //     left: 0,
        //     //     top: 0,
        //     //     backgroundSize: 'cover',
        //     //     backgroundPosition: 'center'
        //     // }}
        // >
        //     {/* <HeaderLogo src={props.imageLogo} style={props.style}/> */}
        //     <Scroller />

            

        // </BackgroundImage>
    // </div>
)

export default GatImg