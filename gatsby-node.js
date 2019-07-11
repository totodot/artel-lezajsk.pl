const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const pathsMap = require('./pathsMap');

const getTranslatedPath = (path) => {
  const [, module, ...rest] = path.split('/');
  const translatedModule = pathsMap[module];
  if (translatedModule) {
    return `/${translatedModule}/${rest.join('/')}`;
  }
  return path;
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const products = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const markdowns = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
              template
            }
          }
        }
      }
    }
  `);

  products.data.allProductsJson.edges.forEach((edge) => {
    const product = edge.node;

    createPage({
      path: `/gql/${product.slug}/`,
      component: require.resolve('./src/templates/product-graphql.js'),
      context: {
        slug: product.slug,
      },
    });
  });

  markdowns.data.allMarkdownRemark.edges.forEach(({ node: { id, fields: { slug, template } } }) => {
    createPage({
      path: getTranslatedPath(slug),
      component: require.resolve(`./src/templates/${String(template)}-template.js`),
      context: {
        id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    const template = value.split('/')[1];
    createNodeField({
      name: 'slug',
      node,
      value: getTranslatedPath(value),
    });
    createNodeField({
      name: 'template',
      node,
      value: template,
    });
  }
};
exports.onCreateDevServer = ({ app }) => {
  fsMiddlewareAPI(app);
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const newPage = { ...page };
  newPage.path = getTranslatedPath(page.path);
  deletePage(page);
  createPage(newPage);
};
