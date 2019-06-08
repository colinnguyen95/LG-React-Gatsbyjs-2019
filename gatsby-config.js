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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LG Marketing`,
        short_name: `LG Marketing`,
        start_url: `/`,
        background_color: `#F5F3EB`,
        theme_color: `#4FC2AA`,
        display: `standalone`,
        icon: 'src/images/Fav_LG.png',
      },
    },
    'gatsby-plugin-react-helmet', 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ],
}
