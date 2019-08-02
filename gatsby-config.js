require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
   siteMetadata: {
      title: 'Danny Burton',
      description: 'Web Developer',
   },
   plugins: [
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
         },
      },
      {
         resolve: 'gatsby-plugin-layout',
         options: {
            component: require.resolve(`./src/layout/layout.js`),
         },
      },
      `gatsby-plugin-sass`,
      `gatsby-plugin-react-helmet`,
   ],
};
