import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Arrow = ({ className, style, onClick }) => (
  <button type="button" className={cx(className, 'slider__arrow')} style={{ ...style }} onClick={onClick} />
);

const SimpleSlider = ({
  children, items, options, itemsPerSlide, arrowsOnDesktop,
}) => {
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
    arrows: arrowsOnDesktop,
    dotsClass: 'slider__dots',
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
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
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: getValueForResponsive(1),
          arrows: false,
        },
      },
    ],
    ...options,
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
  arrowsOnDesktop: PropTypes.bool,
};

SimpleSlider.defaultProps = {
  items: 1,
  itemsPerSlide: 1,
  arrowsOnDesktop: false,
};

export default SimpleSlider;
