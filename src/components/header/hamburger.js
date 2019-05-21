import React, { useState } from 'react';
import cx from 'classnames';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      type="button"
      onClick={toggleHamburger}
      className={cx('hamburger', { hamburger_active: isOpen })}
    >
      <div className="hamburger__box" />
    </button>
  );
};
export default Hamburger;
