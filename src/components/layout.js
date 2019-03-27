import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Helmet from 'react-helmet';
import Nav from './navigation/nav';
import Contact from './contact/contact';
import Footer from './footer/footer';
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
