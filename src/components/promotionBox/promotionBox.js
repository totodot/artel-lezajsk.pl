import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import CircleArrow from '../circleArrow/circleArrow';
import CustomImage from '../image/image';

import './promotionBox.scss';
import { cx } from 'emotion';

const PromotionBox = React.memo(({
  link, title, image, type, percentage, oldPrice, newPrice,
}) => {
  console.log({
    link,
    title,
    image,
    type,
    percentage,
    oldPrice,
    newPrice,
  });
  return (
    <div className="promotion-box">
      <div className="promotion-box__top">
        <div className="promotion-box__label m-b-lg">Promocja</div>
        <div className="m-l-md">
          <div className="promotion-box__name m-b-md">{title}</div>
          <div>
            {type === 'percentage' && (
              <span className="promotion-box__value">{`${percentage}%`}</span>
            )}
            {type === 'newPrice' && (
              <span className="promotion-box__value-crossed m-r-md">{`${oldPrice} zł`}</span>
            )}
            {type === 'newPrice' && (
              <span className="promotion-box__value">{`${newPrice} zł`}</span>
            )}
          </div>
        </div>
      </div>
      <CustomImage image={image} asBackground height={180} />
    </div>
  );
});
PromotionBox.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PromotionBox;
