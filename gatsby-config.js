module.exports = {
  siteMetadata: {
    title: `andrew horn's portfolio`,
    description: `hey, this is my portfolio!`,
    author: `andrew horn`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`
  ]
};
