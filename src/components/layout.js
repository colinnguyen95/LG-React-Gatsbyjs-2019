import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Nav from './Navigation/Nav';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './layout.css';
import FavLG from '../images/FavLG.png';

export default ({ children }) => (
   <StaticQuery
     query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title
             description
             keywords
             }
         }
       }
     `}
     render={data => (
       <>
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
         <div className="mainContainer">
            <Nav />
            {children}
            <Contact />
            <Footer />
         </div>
       </>
     )}
   />
)
