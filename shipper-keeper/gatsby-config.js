module.exports = {
  siteMetadata: {
    siteUrl: "https://web-shipper-keeper.firebaseapp.com",
    title: "ShipperKeeper",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ShipperKeeper`,
        short_name: `ShipperKeeper`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      }
    }
  ],
};
