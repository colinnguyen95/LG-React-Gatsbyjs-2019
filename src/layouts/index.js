import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nav from '../components/nav/nav'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer'
import './index.css'
import FavLG from '../images/FavLG.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
      link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${FavLG}` }
  ]}
    />
    <Nav />
    {children()}
    <Contact />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
