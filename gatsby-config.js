module.exports = {
  siteMetadata: {
    siteUrl: "https://www.fouadmannou.com",
    title: "portfolio-v2",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Mono\:300,400,500,600,700`
        ],
        display: 'swap'
      }
    }
  ],
};
