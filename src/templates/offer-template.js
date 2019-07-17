import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { HTMLContent } from '../components/content/content';
import CustomImage from '../components/image/image';

const Offer = ({ data }) => {
  const {
    markdownRemark: { html, frontmatter: { title, categories, image } = {} },
  } = data;
  return (
    <Layout>
      <SEO title={title} description={`Oferta produktów. ${categories.join(', ')}`} keywords={categories} />
      <div className="container">
        <h1 className="heading_h1">{title}</h1>
        <ul className="offer__categories">
          {categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>

        
        <HTMLContent content={html} />
      </div>
    </Layout>
  );
};

export default Offer;

export const pageQuery = graphql`
  query OfferPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        categories
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
`;
