import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsBox from '../components/newsBox/newsBox';

const News = ({ data: { news } }) => (
  <Layout>
    <SEO title="Aktualności" description="Aktualności: Najświeższe informację związane z życiem firmy. Nowi producenci artykułów elektrycznych oraz oświetlenia dostępni w naszym asortymencie." />
    <div className="container">
      <h1 className="heading_h1">Aktualności</h1>
      <div className="row">
        {news.edges.map(({ node }) => (
          <div className="col-md-4" key={node.id}>
            <NewsBox
              link={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              image={node.frontmatter.image}
            />
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default News;

export const pageQuery = graphql`
  query NewsQuery {
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { published: { eq: true } },
        fileAbsolutePath: {regex: "/(news)/.*\\.md$/"}
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
                fluid(maxWidth: 500, quality: 100) {
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
