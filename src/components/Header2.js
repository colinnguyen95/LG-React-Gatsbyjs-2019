import React from 'react'
import './Header2.css'
import Scroller from './Scroller'
import PageTitle from './PageTitle'
import styled from 'styled-components'

const HeaderGroup = styled.div`
    background: linear-gradient(
        rgba(20,20,20, .57),
        rgba(20,20,20, .93),
        rgba(20,20,20, .6)),
        url(${props => props.image});
    background-position: top center;
    background-size: contain;
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

    @media (min-width: 1025px) {
        background-attachment: fixed;
      }
`

const Header2 = props => (
	// <div className="Header">
    //     <div className="parallax">
    //         <img className="logo" src={props.imageLogo} />
    //         <img src={props.image} />
    //     </div>
    // </div>
    
    <HeaderGroup image={props.image}>

        <PageTitle title={props.title}/>
        
        <Scroller />
    </HeaderGroup>
)

export default Header2