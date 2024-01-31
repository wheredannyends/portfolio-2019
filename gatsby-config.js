module.exports = {
   siteMetadata: {
      title: 'Danny Burton',
      description: 'Web Developer',
   },
   plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-mdx',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'projects',
            path: 'projects',
         },
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: 'src/assets/images',
         },
      },
      {
         resolve: 'gatsby-plugin-transition-link',
         options: {
            layout: require.resolve('./src/layout/layout.js'),
         },
      },
   ],
};

