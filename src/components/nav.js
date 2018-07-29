import React from 'react'
import Link from 'gatsby-link'
import './Nav.css'

const Nav = ({ siteTitle }) => (
  <div className="nav-section">
    <div className="nav-container">
        <nav className="site-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
        
        <div className="menu-toggle">
            <div className="hamburger"></div>
        </div>
    </div>
</div>

)

export default Nav
