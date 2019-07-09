import React from 'react';

import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Banner from '../components/banner/banner';
import NewsBox from '../components/newsBox/newsBox';
import WhyBox from '../components/whyBox/whyBox';

const IndexPage = ({ data }) => {
  const { articles } = data;
  console.log(articles);
  return (
    <Layout>
      <SEO title="Strona główna" keywords={['gatsby', 'application', 'react']} />
      <Banner />

      <section className="section_dark">
        <div className="container">
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
          </div>

          <Link to="/page-3/">Go to page 3</Link>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {articles.edges.map(({ node }) => (
              <div className="col">
                <Link to={node.fields.slug}>
                  <NewsBox />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section_dark">
        <div className="container">
          <h2>Dlaczego my?</h2>
          <div className="row">
            <div className="col-md-4">
              <WhyBox />
            </div>
            <div className="col-md-4">
              <WhyBox />
            </div>
            <div className="col-md-4">
              <WhyBox />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    articles: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      limit: 3
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    blogs: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
