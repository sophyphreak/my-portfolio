module.exports = {
  siteMetadata: {
    title: `Andrew Horn's Portfolio`,
    description: `Hey, this is my portfolio!`,
    author: `Andrew Horn`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
