import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
    siteTitle: `tosquisec`,
    siteTitleAlt: `tosquisec`,
    siteHeadline: `tosquisec`,
    siteUrl: `https://tosquisec.github.io`,
    siteDescription: `Personal website, wannabe cybersecurity blog soon`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@t05qu17`,
  },
  trailingSlash: `always`,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @tosquisec/gatsby-theme-cara`,
        icon:  `./static/favicon.png`,
        short_name: `Cara`,
        description: `Personal website, wannabe cybersecurity blog soon`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#f6ad55`,
        display: `standalone`,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
