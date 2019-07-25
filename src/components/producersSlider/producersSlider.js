import React from 'react';
import PropTypes from 'prop-types';

import CustomImage from '../image/image';
import SimpleSlider from '../slider/slider';

const ProducersSlider = ({ producers }) => (
  <div className="m-t-xl">
    <SimpleSlider
      itemsPerSlide={4}
      items={producers.length}
      arrowsOnDesktop
      options={{
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }}
    >
      {producers.map(({ name, image, link }) => (
        <div key={name}>
          <a href={link} target="_blank" className="producer">
            <img className="producer__image" alt={name} src={image} />
          </a>
        </div>
      ))}
    </SimpleSlider>
  </div>
);

ProducersSlider.propTypes = {
  producers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      // image: PropTypes.string.isRequired,
    }),
  ),
};

ProducersSlider.defaultProps = {
  producers: [],
};

export default ProducersSlider;
