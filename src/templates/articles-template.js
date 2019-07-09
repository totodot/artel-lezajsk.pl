import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  console.log(data);
  const { placeholderImage } = data;

  return <h1>Articles</h1>;
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
