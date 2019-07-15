import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HTMLContent } from '../components/content/content';

const AboutUs = ({ data }) => (
  <Layout>
    <SEO title="O nas" />
    <div className="container">
      <h1 className="heading_h1">{data.markdownRemark.frontmatter.title}</h1>
      <HTMLContent content={data.markdownRemark.html} />
    </div>
  </Layout>
);

export default AboutUs;

export const pageQuery = graphql`
  query AboutUsQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
