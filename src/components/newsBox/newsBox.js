import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import CircleArrow from '../circleArrow/circleArrow';

import './newsBox.scss';
import CustomImage from '../image/image';

const NewsBox = ({
  title, date, image, link,
}) => (
  <div className="news-box m-b-xl m-l-md m-r-md">
    <div className="news-box__top">
      <div className="news-box__date">{date}</div>
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
