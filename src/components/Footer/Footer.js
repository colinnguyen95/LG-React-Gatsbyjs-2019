import React from 'react'
import './Footer.css'

const Footer = props => (
    <div className="FooterGroup">
        {/* <div className="circle">

        </div> */}
        
        <img src={require("../../images/Footer_Logo.svg")} />
        <div className="address">
            <p>Address: 3031 Tish Way</p>
            <p>110 Plaza West</p>
            <p>San Jose CA 95128</p>
            <p>Phone: (408) 320 - 7643 | Email: info@lgmarketing.me</p>
            <p className="copyright">&copy; 2018 by LG Marketing LLC</p>
        </div>
    </div>
)

export default Footer