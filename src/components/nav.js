import React from 'react'
import Link from 'gatsby-link'
import './Nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', 
        this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false})
        }
    }

    render() {
        return(
        <div className={this.state.hasScrolled ? "nav-section NavScrolled" : "nav-section"}>
            <div className="nav-container">
                <nav className="site-nav">
                    <ul>
                        <li><Link exact to="/" activeClassName="active">Home</Link></li>
                        <li><Link exact to="/services" activeClassName="active">Services</Link></li>
                        <li><Link exact to="/about" activeClassName="active">About</Link></li>
                        <li><Link exact to="/contact" activeClassName="active">Contact</Link></li>
                    </ul>
                </nav>
                
                <div className="menu-toggle">
                    <div className="hamburger"></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Nav
