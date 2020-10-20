require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The Ranch Taproom | Lake Wales, FL`,
    description: `Local taproom and coffeehouse in Lake Wales, FL.`,
    url: "https://angry-bohr-9e84bc.netlify.app/",
    image: "https://i.imgur.com/uATllRn.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "ranch",
        accessToken: process.env.PRISMIC_KEY,
        lang: "en-US",
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
        },
        shouldDownloadImage: () => true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
    },
  ],
}
