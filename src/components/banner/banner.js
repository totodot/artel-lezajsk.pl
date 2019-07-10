import React from 'react';
import cx from 'classnames';

import SvgBulb from '../../images/icons/bulb.inline.svg';
import SvgWire from '../../images/icons/wire.inline.svg';
import SvgPlug from '../../images/icons/plug.inline.svg';
import SvgLightning from '../../images/icons/lightning.inline.svg';

import ImgBulb from '../../images/bulb.png';

import './banner.scss';

const Banner = () => (
  <div className="banner">
    <img src={ImgBulb} alt="" className="banner__bulb" />
    <div className="banner__circles">
      <div className="banner__circle banner__circle_1" />
      <div className="banner__circle banner__circle_2" />
      <div className="banner__circle banner__circle_3" />
    </div>
    <div>
      <div className="banner__icon-wrapper">
        <div className="banner__icon">
          <SvgBulb />
        </div>
      </div>
      <div className="banner__icon-wrapper">
        <div className="banner__icon">
          <SvgLightning />
        </div>
      </div>
      <div className="banner__icon-wrapper">
        <div className="banner__icon">
          <SvgWire />
        </div>
      </div>
      <div className="banner__icon-wrapper">
        <div className="banner__icon">
          <SvgPlug />
        </div>
      </div>
    </div>
  </div>
);
export default Banner;
