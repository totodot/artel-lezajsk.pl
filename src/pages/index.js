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
import PromotionBox from '../components/promotionBox/promotionBox';
import SimpleSlider from '../components/slider/slider';
import ProducersSlider from '../components/producersSlider/producersSlider';

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

const IndexPage = React.memo(({ data }) => {
  const {
    news, home, promotions, producers: producersObject,
  } = data;
  const { producers } = producersObject;
  console.log(producers);
  return (
    <Layout>
      <SEO
        title="Strona główna"
        keywords={['sklep elektryczny', 'żarówki', 'oświetlenie led', 'części agd']}
      />
      <Banner />

      <section className="section section_dark">
        <div className="container">
          {!!promotions.edges.length && (
            <div className="promotions-slider">
              <SimpleSlider itemsPerSlide={4} items={promotions.edges.length}>
                {promotions.edges.map(({ node }) => (
                  <PromotionBox key={node.id} link={node.fields.slug} {...node.frontmatter} />
                ))}
              </SimpleSlider>
            </div>
          )}
          {home && (
            <div className="row m-t-xxl">
              <div className="col-12 col-md-4">
                <div className="home-info__image m-r-xxl">
                  <CustomImage image={home.frontmatter.image} />
                  <div className="home-info__icon">
                    <HomeIcon />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div className="home-info__title">{home.frontmatter.title}</div>
                <HTMLContent className="home-info__content" content={home.html} />
              </div>
            </div>
          )}
          <ProducersSlider producers={producers} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="heading_h2">Aktualności</h2>
          <div>
            <SimpleSlider itemsPerSlide={3} items={news.edges.length}>
              {news.edges.map(({ node }) => (
                <NewsBox
                  key={node.fields.slug}
                  link={node.fields.slug}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  image={node.frontmatter.image}
                />
              ))}
            </SimpleSlider>
          </div>
        </div>
      </section>
      <section className="section section_dark">
        <div className="container">
          <h2 className="heading_h2">Dlaczego my?</h2>
          <div className="row">
            {whyBoxes.map(box => (
              <div className="col-md-4" key={box.name}>
                <WhyBox {...box} key={box.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
});

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    producers: producersJson {
      producers {
        name
        image 
        link 
      }
    }
    promotions: allMarkdownRemark(
      filter: {
        frontmatter: { active: { eq: true } },
        fileAbsolutePath: {regex: "/(promotions)/.*\\.md$/"}
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
            type
            oldPrice
            newPrice
            percentage
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
    home: markdownRemark(fileAbsolutePath: {regex: "/(home)/.*\\.md$/"}) {
      id
      html
      frontmatter {
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
