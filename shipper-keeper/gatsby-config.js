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
          apiKey: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          authDomain: "what could have been here?",
          projectId: "hmmmmmmmmmmmmmmmmmmmmmmmmmm",
          storageBucket: "somthing was here i think",
          messagingSenderId: "somthing i guess",
          appId: "something i guess",
        }
      }
    },
  ],
};
