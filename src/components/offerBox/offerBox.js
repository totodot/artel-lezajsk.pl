import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './offerBox.scss';
import CustomImage from '../image/image';
import CircleArrow from '../circleArrow/circleArrow';

const OfferBox = ({
  title, categories, image, link,
}) => {
  console.log(image);
  return (
    <div className="offer-box">
      <Link to={link}>
        <h3 className="heading_h3 offer-box__title">{title}</h3>
        <CustomImage image={image} asBackground height={220} />
        <div className="offer-box__categories">
          {categories.map(category => (
            <p className="offer-box__category">{category}</p>
          ))}
        </div>
        <CircleArrow />
      </Link>
    </div>
  );
};

OfferBox.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default OfferBox;
