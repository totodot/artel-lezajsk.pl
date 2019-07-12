import React from 'react';
import Image from 'gatsby-image';
import cx from 'classnames';

import './image.scss';

const CustomImage = ({ image, asBackground, height }) => {
  const style = {
    ...(asBackground
      ? {
        height: `${height}px`,
      }
      : {}),
  };
  const className = cx({
    'custom-image_bg': asBackground,
  });
  if (!image) {
    return null;
  }
  return <Image style={style} className={className} fluid={image.childImageSharp.fluid} />;
};
export default CustomImage;
