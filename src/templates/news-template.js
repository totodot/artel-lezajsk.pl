import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CustomImage from '../components/image/image';
import { HTMLContent } from '../components/content/content';

export default function News({ data: { markdownRemark } }) {
  const {
    frontmatter: { date, title, image },
    html,
  } = markdownRemark;
  return (
    <Layout>
      <SEO title={`Aktualności - ${title}`} />
      <div className="news__header">
        <CustomImage image={image} alt={title} asBackground />
        <div className="news__caption">
          <div className="container">
            <h1 className="news__title">{title}</h1>
            <div>
              <span className="news__date">{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <HTMLContent className="news__content m-t-xl m-b-xl" content={html} />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
