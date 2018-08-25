import React from 'react'
import Link from 'gatsby-link'
import './Nav.css'

import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
    scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
    }
    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
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
