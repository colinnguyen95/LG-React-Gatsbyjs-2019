import React from 'react'
import './Work1.css'
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';

const IMAGES = graphql` 
  {
    img1: file(relativePath: {eq: "lg_about.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2048) {
              ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: {eq: "lg_about_2.1.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2048) {
              ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: {eq: "lg_about_3.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2048) {
              ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Work1 = () => {
  return (
    <StaticQuery
      query={IMAGES}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid;
        const img2 = data.img2.childImageSharp.fluid;
        const img3 = data.img3.childImageSharp.fluid;

        return(
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
                <div className="item small twoG">
                    <Img 
                      fluid={img2}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                    />
                </div>
                <div className="item small threeG">
                    <Img 
                      fluid={img3}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                    />
                </div>
            </div>
            
            <div className="bottom">
                <div className="item large fourG">
                  <Img 
                    fluid={img1}
                    className="aboutImg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "125%",
                      position: "absolute",
                      left: 0,
                      top: 0,
                    }}
                  />
                </div>
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
                    <div className="item small work2G">
                      <Img 
                        fluid={img2}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                      />
                    </div>
                    <div className="item small work3G">
                      <Img 
                        fluid={img3}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                      />
                    </div>
                </div>
            </div>
        </div>
        )
      }}
    />
  )
}

export default Work1