import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({ data: { markdownRemark } }) {
  const {
    frontmatter: { date, title, image },
  } = markdownRemark;

  return (
    <Layout>
      <SEO title={`Aktualności - ${title}`} />
      <div>
        <h1>{title}</h1>

        <p>{date}</p>
        <Image fluid={image.childImageSharp.fluid} alt={title} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ArticlePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
