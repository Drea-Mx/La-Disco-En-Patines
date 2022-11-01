module.exports = {
  siteMetadata: {
    title: `La Disco En Patines`,
    description: `Setting the scene, below the line.`,
    twitterUsername: `@gatsbyjs`,
    image: `./src/assets/image.png`,
    siteUrl: `https://lovely-tanuki-74d8d1.netlify.app`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};