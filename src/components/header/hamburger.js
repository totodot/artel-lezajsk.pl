import React from 'react';
import cx from 'classnames';

const Hamburger = ({ onChange, isOpen }) => (
  <button
    type="button"
    onClick={onChange}
    className={cx('hamburger', { hamburger_active: isOpen })}
  >
    <div className="hamburger__box" />
  </button>
);
export default Hamburger;
