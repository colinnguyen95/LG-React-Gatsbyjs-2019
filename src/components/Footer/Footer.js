import React from 'react'
import './Footer.css'

const Footer = props => (
    <div className="FooterGroup">
        {/* <div className="circle">

        </div> */}
        
        {/* <img src={require("../../images/Footer_Logo.svg")} /> */}
        <div className="address">
            <p>3031 Tish Way</p>
            <p>110 Plaza West</p>
            <p>San Jose, CA 95128</p>
            <p>(408) 320 - 7643 | info@lgmarketing.me</p>
            <p className="copyright">&copy; 2019 by LG Marketing LLC</p>
        </div>
    </div>
)

export default Footer