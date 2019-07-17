import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HTMLContent } from '../components/content/content';

const AboutUs = ({ data }) => (
  <Layout>
  <SEO title="O nas" description="Strona informacyjna: Jesteśmy firmą z dużym doświadczeniem na rynku. Pomożemy Ci w wyborze oświetlenia w również oświetlenia LED" />
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
