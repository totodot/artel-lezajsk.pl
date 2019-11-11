import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { project } from '../../../siteConfig';
import ArtelLogo from '../../images/artel-logo.inline.svg';
import AdaLogo from '../../images/ada-logo.inline.svg';

import Hamburger from './hamburger';
import { debounce } from './utils';
import pathsMap from '../../../pathsMap';

const Y_OFFSET = 70;
const logoMap = {
  artel: ArtelLogo,
  ada: AdaLogo,
};

const getYScroll = () => window.pageYOffset;

const Header = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = debounce(() => {
      if (getYScroll() > Y_OFFSET) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const Logo = logoMap[project];
  useEffect(() => {
    if (isHamburgerOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [isHamburgerOpen]);
  const toogleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };
  const menuLinks = [
    {
      name: 'o nas',
      link: `/${pathsMap.about}`,
    },
    {
      name: 'aktualności',
      link: `/${pathsMap.news}`,
    },
    {
      name: 'galeria',
      link: `/${pathsMap.gallery}`,
    },
    {
      name: 'oferta',
      link: `/${pathsMap.offer}`,
    },
    // {
    //   name: 'kontakt',
    //   link: `/${pathsMap.contact}`,
    // },
  ];

  return (
    <>
      <header
        className={cx({
          header: true,
          header_scrolled: isScrolled,
        })}
      >
        <div className="container header__container">
          <div className="header__wrapper">
            <div className="header__hamburger">
              <Hamburger onChange={toogleHamburger} isOpen={isHamburgerOpen} />
            </div>
            <div
              className={cx({
                header__logo: true,
                header__logo_ada: project === 'ada',
                header__logo_artel: project === 'artel',
              })}
            >
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="header__nav">
              <nav className="nav">
                <ul className="nav__list">
                  {menuLinks.map(({ name, link }) => (
                    <li className="nav__item" key={name}>
                      <Link
                        to={link}
                        className="nav__link"
                        activeClassName="nav__link_active"
                      >
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
      <nav
        className={cx('mobile-nav', {
          'mobile-nav_active': isHamburgerOpen,
          'mobile-nav_scrolled': isScrolled,
        })}
      >
        <ul className="mobile-nav__list">
          {menuLinks.map(({ name, link }) => (
            <li className="mobile-nav__item" key={name}>
              <Link
                to={link}
                className="mobile-nav__link"
                activeClassName="mobile-nav__link_active"
              >
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
