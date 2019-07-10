import React from 'react';
import PropTypes from 'prop-types';
import './whyBox.scss';

import BulbIcon from '../../images/icons/whyus_bulb.inline.svg';
import HomeIcon from '../../images/icons/whyus_home.inline.svg';
import MountainIcon from '../../images/icons/whyus_mountain.inline.svg';

const iconsMap = {
  mountain: MountainIcon,
  bulb: BulbIcon,
  home: HomeIcon,
};

const WhyBox = React.memo(({ text, name }) => {
  const Icon = iconsMap[name] || null;
  return (
    <div className="why-box">
      <div className="why-box__circle">
        <div className="why-box__icon">
          <Icon />
        </div>
      </div>
      <div className="why-box__text">
        <h3>{text}</h3>
      </div>
    </div>
  );
});
export default WhyBox;

WhyBox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

WhyBox.defaultProps = {
  text: 'Default Text',
  name: '',
};
