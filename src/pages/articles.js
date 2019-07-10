import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsBox from '../components/newsBox/newsBox';

const Articles = ({ data: { articles } }) => (
  <Layout>
    <SEO title="Aktualności " />
    <section className="section">
      <div className="container">
        <h1 className="heading_h2">Aktualności</h1>
        <div className="row">
          {articles.edges.map(({ node }) => (
            <div className="col-md-4">
              <NewsBox
                link={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                fluidImage={node.frontmatter.image && node.frontmatter.image.childImageSharp.fluid}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Articles;

export const pageQuery = graphql`
  query ArticlesQuery {
    articles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { published: { eq: true } },
        fileAbsolutePath: {regex: "/(articles)/.*\\.md$/"}
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
