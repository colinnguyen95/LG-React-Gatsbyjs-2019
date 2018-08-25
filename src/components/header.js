import React from 'react'
import './Header.css'
import Scroller from './Scroller'
import styled from 'styled-components'

const HeaderGroup = styled.div`
    background: linear-gradient(
        rgba(20,20,20, .57),
        rgba(20,20,20, .93),
        rgba(20,20,20, .6)),
        url(${props => props.image});
    background-attachment: fixed;
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 550px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const HeaderLogo = styled.img`
    height: 170px;
    width: 100%;
`

const Parallax = styled.div`

`

const Header = props => (
	// <div className="Header">
    //     <div className="parallax">
    //         <img className="logo" src={props.imageLogo} />
    //         <img src={props.image} />
    //     </div>
    // </div>
    
    <HeaderGroup image={props.image}>
        <HeaderLogo src={props.imageLogo} />
        <Parallax >

        </Parallax>
        <Scroller />
    </HeaderGroup>
)

export default Header