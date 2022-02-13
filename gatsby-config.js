module.exports = {
  siteMetadata: {
    title: `borjekabotar`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-transformer-geojson`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL || `https://www.borjekabotar.com/graphql`,
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/static/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/geojson/ptowers.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cinzel Decorative\:400,700,900`,
          `Montserrat\:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown",
        path: `${__dirname}/contents/`,
      },
    },
  ],
};
