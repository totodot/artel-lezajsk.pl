import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const SimpleSlider = ({ children, items, itemsPerSlide }) => {
  const [isRender, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  const slidesToShow = Math.min(...[itemsPerSlide, items]);
  const getValueForResponsive = a => Math.min(...[a, slidesToShow]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'slider__dots',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: getValueForResponsive(3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: getValueForResponsive(2),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: getValueForResponsive(1),
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider key={`slider-${isRender ? 'before' : 'after'}`} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

SimpleSlider.propTypes = {
  items: PropTypes.number,
  itemsPerSlide: PropTypes.number,
  className: PropTypes.string,
};

SimpleSlider.defaultProps = {
  items: 1,
  itemsPerSlide: 1,
};

export default SimpleSlider;
