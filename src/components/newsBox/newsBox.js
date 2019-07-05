import React from 'react';
import cx from 'classnames';

import ImgBulb from '../../images/bulb.png';

import './newsBox.scss';

const NewsBox = () => (
  <div className="news-box">
    <div className="news-box__top">date</div>
    <div className="news-box__bottom">
      <img className="news-box__image" src={ImgBulb} alt="" />
    </div>
  </div>
);
export default NewsBox;
