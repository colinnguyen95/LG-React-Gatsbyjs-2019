import React from 'react'
import './work.css'

const Work = props => (
    <div className="WorkGroup">
        <div className="top">
            <div className="item large five">
                <div className="five-content">
                    <h1 className="mission-title">What We Do</h1>
                    <hr/>
                    <p className="mission-description"><strong>LG Marketing</strong>, LLC is a boutique consulting firm offering a comprehensive list of full-scale marketing services. 
                    We serve as an extension to your internal team while driving forward progress on your initiatives. 
                    We work closely with you to create successful programs, elevate your marketing efforts and connect with your customers to increase engagement.  
                    </p>
                </div>
            </div>
            <div className="item small two"></div>
            <div className="item small three"></div>
        </div>
        
        <div className="bottom">
            <div className="item large four"></div>
            <div className="item large one">
                <div className="one-content">
                    <h1 className="one-title">Who We Are</h1>
                    <hr/>
                    <p>The LG Marketing team consists of professionals with 30+ years of combined 
                    experience in medical device and practice marketing.  By aligning with premiere talent 
                    in Silicon Valley we are able to provide our clients with a wide range of services and most 
                    importantly unparalleled marketing support.</p> 
                </div>
            </div>
            <div className="workBottom">
                <div className="item small work2"></div>
                <div className="item small work3"></div>
            </div>
        </div>
    </div>
)

export default Work