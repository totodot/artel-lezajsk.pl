import React from 'react';

import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/banner/banner';
import NewsBox from '../components/newsBox/newsBox';
import WhyBox from '../components/whyBox/whyBox';

import { HTMLContent } from '../components/content/content';
import CustomImage from '../components/image/image';
import HomeIcon from '../images/icons/home-icon.inline.svg';

const whyBoxes = [
  {
    name: 'mountain',
    text: 'Ponad 25 letnie  doświadczenie w branży',
  },
  {
    name: 'bulb',
    text: 'Duży wybór oświetlenia',
  },
  {
    name: 'home',
    text: 'Szeroki wybór materiałów elektrycznych',
  },
];

const IndexPage = ({ data }) => {
  const { news, home } = data;
  return (
    <Layout>
      <SEO title="Strona główna" keywords={['gatsby', 'application', 'react']} />
      <Banner />

      {home && (
        <section className="section section_dark">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-md-3">
                <div className="home-info__image m-r-xl">
                  <CustomImage image={home.frontmatter.image} />
                  <div className="home-info__icon">
                    <HomeIcon />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <h2 className="heading_h2 m-t-xl">{home.frontmatter.title}</h2>
                <HTMLContent className="m-l-xl" content={home.html} />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="heading_h2">Aktualności</h2>
          <div className="row">
            {news.edges.map(({ node }) => (
              <div className="col">
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
      </section>
      <section className="section section_dark">
        <div className="container">
          <h2 className="heading_h2">Dlaczego my?</h2>
          <div className="row">
            {whyBoxes.map(box => (
              <div className="col-md-4">
                <WhyBox {...box} key={box.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    home: markdownRemark(fileAbsolutePath: {regex: "/(home)/.*\\.md$/"}) {
      id
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
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
