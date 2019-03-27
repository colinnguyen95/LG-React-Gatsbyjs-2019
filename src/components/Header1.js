import React from 'react'
import PageTitle from './pagetitle/pagetitle'
import Scroller from './scroller/scroller'
import styled from 'styled-components'

const HeaderGroup = styled.div`
    background: linear-gradient(
        rgba(20,20,20, .57),
        rgba(20,20,20, .70),
        rgba(20,20,20, .6)),
        url(${props => props.image});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 550px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 480px) {
        background-position: center center; 
        background-size: cover;
        height: 400px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        background-position: center center; 
        background-size: cover;
        height: 500px;
      }

    @media (min-width: 481px) and (max-width: 767px) {
        background-position: center center; 
        background-size: cover;
        height: 500px;
    }

    ${'' /* @media (min-width: 1025px) {
        background-attachment: fixed;
    } */}
`
const HeaderLogo = styled.img`
    ${'' /* height: 170px;
    width: 100%;
    margin: 0 20px;
    opacity: 0;
    animation: HeroAnimation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */}
`

const Header1 = props => (
    <HeaderGroup image={props.image}>
        <HeaderLogo src={props.imageLogo} style={props.style}/>
        <PageTitle title={props.title} />
        <Scroller />
    </HeaderGroup>
)

export default Header1