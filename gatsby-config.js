module.exports = {
  siteMetadata: {
    title: `Transparent California`,
    description: `An updated version of the Transparent California site built on modern web technologies`,
    author: `Sean Collins`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
