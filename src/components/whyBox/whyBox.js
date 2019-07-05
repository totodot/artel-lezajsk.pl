import React from 'react';
import PropTypes from 'prop-types';
import './whyBox.scss';
import SvgBulb from '../../images/icons/bulb.inline.svg';

const WhyBox = React.memo(({ text }) => (
  <div className="why-box">
    <div className="why-box__circle">
      <div className="why-box__icon">
        <SvgBulb />
      </div>
    </div>
    <p className="why-box__text">{text}</p>
  </div>
));
export default WhyBox;

WhyBox.propTypes = {
  text: PropTypes.string,
};

WhyBox.defaultProps = {
  text: 'Default Text',
};
