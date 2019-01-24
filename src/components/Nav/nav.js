import React from 'react'
import Link from 'gatsby-link'
import './Nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false,
            isExpanded: false
        }
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
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
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        return(
        <div className={this.state.hasScrolled ? "nav-section NavScrolled" : "nav-section"}>
            <div className="nav-container">
                <nav className={`site-nav ${isExpanded ? 'site-nav--open' : ""}`} ref="inner">
                    <ul>
                        <li onClick={(e) => this.handleToggle(e)}>
                            <Link exact to="/" activeClassName="active">
                                Home
                            </Link>
                        </li>
                        <li onClick={(e) => this.handleToggle(e)}>
                            <Link exact to="/services" activeClassName="active">
                                Services
                            </Link>
                        </li>
                        <li onClick={(e) => this.handleToggle(e)}>
                            <Link exact to="/about" activeClassName="active">
                                About
                            </Link>
                        </li>
                        <li onClick={(e) => this.handleToggle(e)}>
                            <Link exact to="/contact" activeClassName="active">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                <div className={`menu-toggle ${isExpanded ? 'open' : ""}`} onClick={(e) => this.handleToggle(e)}>
                    <div className="hamburger"></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Nav
