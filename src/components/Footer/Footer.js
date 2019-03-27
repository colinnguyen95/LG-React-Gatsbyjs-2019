import React from 'react'
import './footer.css'

const Footer = props => (
    <div className="FooterGroup">
        {/* <div className="circle">

        </div> */}
        
        {/* <img src={require("../../images/Footer_Logo.svg")} /> */}
        <div className="address">
            <p>3031 Tish Way</p>
            <p>110 Plaza West</p>
            <p>San Jose, CA 95128</p>
            <p><a href="tel:408-320-7643">(408) 320 - 7643</a> | <a href="mailto:info@lgmarketing.me">info@lgmarketing.me</a></p>
            <p className="copyright">&copy; {new Date().getFullYear().toString()} by LG Marketing LLC</p>
        </div>
    </div>
)

export default Footer