import React from 'react';
import PropTypes from 'prop-types';
import CircleArrow from '../circleArrow/circleArrow';
import Clock from '../../images/icons/clock.inline.svg';

import CustomImage from '../image/image';

const NewsBox = ({
  title, date, image, link,
}) => (
  <div className="news-box">
    <div className="news-box__top">
      <div className="news-box__date">
        <Clock className="news-box__clock" />
        {date}
      </div>
      <h3 className="heading_h3 news-box__title">{title}</h3>
    </div>
    <CustomImage image={image} asBackground height={220} />
    <CircleArrow link={link} />
  </div>
);

NewsBox.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsBox;
