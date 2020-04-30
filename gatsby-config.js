module.exports = {
  siteMetadata: {
    name: 'DJ Zwackery',
    title: 'DJ Zwackery',
    description: 'Homepage of Australian Happy Hardcore DJ, Zwackery',
    ogDescription: 'Homepage of Australian Happy Hardcore DJ, Zwackery',
    author: `@DJZwackery`,
    url: 'https://djzwackery.com',
    logo: '/images/logo.png',
    image: '/images/meta.png'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-twitter`
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@styles': 'src/styles',
          styles: 'src/styles',
          '@pages': 'src/pages',
          '@images': 'src/images',
          '@audio': 'static/audio',
          '@templates': 'src/templates',
          '@data': 'src/data'
        },
        extensions: ['js', 'scss']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DJ Zwackery`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#31394a`,
        theme_color: `#849db5`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`
      }
    }
  ]
}
