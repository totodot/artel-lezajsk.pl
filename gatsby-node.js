const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

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
      path: slug,
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
      value,
    });
    createNodeField({
      name: 'template',
      node,
      value: template,
    });

    console.log({
      value,
      template,
    });
  }
};
exports.onCreateDevServer = ({ app }) => {
  fsMiddlewareAPI(app);
};
// {
//   allMarkdownRemark(limit: 1000) {
//     edges {
//       node {
//         id
//         fields {
//           slug
//         }
//         frontmatter {
//           tags
//           templateKey
//         }
//       }
//     }
//   }
// }
