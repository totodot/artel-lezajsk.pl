import React from 'react';
import { Link } from 'gatsby';
import ArrowRightIcon from '../../images/icons/arrow-right.inline.svg';
import './circleArrow.scss';

const CircleArrow = ({ link }) => {
  const body = (
    <div className="circle-arrow">
      <ArrowRightIcon />
    </div>
  );

  return <>{link ? <Link to={link}>{body}</Link> : body}</>;
};
export default CircleArrow;
