import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import OfferBox from '../components/offerBox/offerBox';

const Offer = ({ data }) => {
  const { offer } = data;
  return (
    <Layout>
      <SEO title="Oferta" />
      <div className="container">
        <h1 className="heading_h1">Oferta</h1>
        <div className="row">
          {offer.edges.map(({ node }) => (
            <div className="col-md-4 m-b-xxl" key={node.id}>
              <OfferBox {...node.frontmatter} link={node.fields.slug} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Offer;

export const pageQuery = graphql`
  query OfferQuery {
    offer: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/(offer)/.*\\.md$/"}
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            categories
            title
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
