module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ShipperKeeper",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
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
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAvSH2cJQWEN5Yp32kI2X83fC_V5xTdJoQ",
          authDomain: "web-shipper-keeper.firebaseapp.com",
          databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          projectId: "web-shipper-keeper",
          storageBucket: "web-shipper-keeper.appspot.com",
          messagingSenderId: "226083968262",
          appId: "<YOUR_FIREBASE_APP_ID>"
        }
      }
    },
  ],
};
