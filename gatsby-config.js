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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Ranch Taproom | Lake Wales, FL`,
        short_name: `The Ranch`,
        start_url: `/`,
        background_color: `#F6F5ED`,
        theme_color: `#1B3D69`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
  ],
}
