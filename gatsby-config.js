module.exports = {
  siteMetadata: {
    title: `Somerset Little Eagle Football`,
    description: `Youth football and cheerleading program`,
    author: `@gatsbyjs`,
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-wrap-iframe`,
          {
            resolve: `gatsby-plugin-favicon`,
            options: {
              logo: './src/images/SLEF-icon.png',

              // WebApp Manifest Configuration
              appName: null, // Inferred with your package.json
              appDescription: null,
              developerName: null,
              developerURL: null,
              dir: 'auto',
              lang: 'en-US',
              background: '#fff',
              theme_color: '#fff',
              display: 'standalone',
              orientation: 'any',
              start_url: '/?homescreen=1',
              version: '1.0',

              icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false,
              },
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
