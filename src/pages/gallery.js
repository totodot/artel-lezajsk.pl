import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { graphql } from 'gatsby';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Layout from '../components/layout';
import SEO from '../components/seo';

const GalleryPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    id: node.id,
    ...node.childImageSharp.fluid,
  }));
  const imagesWithWidth = images.map(({
    src, srcSet, sizes, aspectRatio,
  }) => ({
    src,
    srcSet,
    sizes,
    width: aspectRatio,
    height: 1,
  }));
  console.log(imagesWithWidth);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <Layout>
      <SEO title="Galeria zdjęć" />
      <div className="container">
        <h1 className="heading_h1">Galeria</h1>
        <div className="m-b-xxl" >
          <Gallery photos={imagesWithWidth} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={images.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;

export const pageQuery = graphql`
  query GalleryQuery {
    images: allFile(filter: { absolutePath: { regex: "/(content/gallery/images)/.*/" } }) {
      edges {
        node {
          publicURL
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalImg
            }
          }
        }
      }
    }
  }
`;
