import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import Logo from '../images/logo.inline.svg';
import Hamburger from './header/hamburger';

const Header = ({ siteTitle }) => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const toogleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };
  const menuLinks = [
    {
      name: 'o nas',
      link: '/about',
    },
    {
      name: 'aktualności',
      link: '/news',
    },
    {
      name: 'dlaczego my?',
      link: '/whyus',
    },
    {
      name: 'oferta',
      link: '/offer',
    },
    {
      name: 'kontakt',
      link: '/contact',
    },
  ];
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <div className="header__wrapper">
            <div className="header__hamburger">
              <Hamburger onChange={toogleHamburger} isOpen={isHamburgerOpen} />
            </div>
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__nav">
              <nav className="nav">
                <ul className="nav__list">
                  {menuLinks.map(({ name, link }) => (
                    <li className="nav__item" key={link}>
                      <Link to={link} className="nav__link" activeClassName="nav__link_active">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <nav className={cx('mobile-nav', { 'mobile-nav_active': isHamburgerOpen })}>
        <ul className="mobile-nav__list">
          {menuLinks.map(({ name, link }) => (
            <li className="mobile-nav__item" key={link}>
              <Link to={link} className="mobile-nav__link" activeClassName="nav__link_active">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
