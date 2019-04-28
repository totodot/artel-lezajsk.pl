/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using
const path = require("path")

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
  `)

  const blog = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              id
            }
          }
        }
      }
    }
  `)

  products.data.allProductsJson.edges.forEach(edge => {
    const product = edge.node

    createPage({
      path: `/gql/${product.slug}/`,
      component: require.resolve("./src/templates/product-graphql.js"),
      context: {
        slug: product.slug,
      },
    })
  })
  blog.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log('dsadasd')
    console.log(node);
    createPage({
      path: `/posts/${node.frontmatter.id}/`,
      component: require.resolve("./src/templates/blog-template.js"),
      context: {
        id: node.frontmatter.id,
      }, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const { frontmatter } = node
  if (frontmatter) {
    const { thumbnail } = frontmatter
    if (thumbnail) {
      if (thumbnail.indexOf("/assets") === 0) {
        frontmatter.thumbnail = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, "/static/", thumbnail)
        )
      }
    }
  }

  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   })
  // }
}
