import React from 'react'
import Img from 'gatsby-image';
import PageTitle from './PageTitle/PageTitle'
import Scroller from './Scroller/Scroller'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    height: 450px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
    rgba(20,20,20, .4),
    rgba(20,20,20, .6),
    rgba(20,20,20, .4));
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

    @media (min-width: 1024px) {
        margin-top: 50px;
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
            alt={props.alt}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: -99
            }}
        />
        <HeaderLogo src={props.imageLogo} style={props.style} alt={props.altLogo}/>
        <PageTitle title={props.title} />
        <Scroller />
    </HeaderWrapper>
)

export default GatImg