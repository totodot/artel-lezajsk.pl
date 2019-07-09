import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ImgBulb from '../../images/bulb.png';

import './newsBox.scss';

const NewsBox = ({
  link, title, date, fluidImage,
}) => (
  <Link to={link}>
    <div className="news-box">
      <div className="news-box__top">
        <div className="news-box__date">{date}</div>
        <div className="news-box__title">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="news-box__bottom">
        <Image fluid={fluidImage} alt={title} />
      </div>
      <div className="news-box__circle" />
    </div>
  </Link>
);

NewsBox.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsBox;
