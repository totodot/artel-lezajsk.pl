const { config, project } = require('./siteConfig');

console.log(`Using project config: '${project}'`);

const sassVariablesString = Object.entries(config.sassVariables)
  .map(b => `${b.join(': ')};`)
  .join(' ');

module.exports = {
  siteMetadata: {
    title: config.name,
    description: config.description,
    author: '@totodt',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: sassVariablesString,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:100,200,300,400,500,600,700,800,900'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/assets/${project}`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/${project}`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'assets',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
            },
          },

          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.name,
        short_name: config.shortName,
        start_url: '/',
        background_color: config.color,
        theme_color: config.color,
        display: 'minimal-ui',
        // TODO: change fav icon
        icon: config.icon,
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/init.js`, // Or another path if you don't want to create /src/cms/init.js
        enableIdentityWidget: true,
        publicPath: 'admin',
        htmlTitle: 'Admin panel',
        manualInit: true,
      },
    },

    // 'gatsby-plugin-netlify-identity-widget',
  ],
};
