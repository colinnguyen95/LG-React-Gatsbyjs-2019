// const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'LG Marketing LLC',
    description: 'LG Marketing is a boutique consulting firm offering a comprehensive list of full-scale marketing services. We serve as an extension to your internal team.',
    keywords: 'marketing, team, consulting, branding, global marketing, photography, public relations, strategic planning, website development, social media, social media marketing'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    'gatsby-plugin-react-helmet', 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ],
}
