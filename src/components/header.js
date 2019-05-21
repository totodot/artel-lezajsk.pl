import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';
import Hamburger from './header/hamburger';

const Header = ({ siteTitle }) => {
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
    <header className="header">
      <div className="container header__container">
        <div className="header__hamburger">
          <Hamburger />
        </div>
        <div className="header__logo">{siteTitle}</div>
        <nav className="nav">
          <ul className="nav__list">
            {menuLinks.map(({ name, link }) => (
              <li className="nav__item">
                <Link to={link} className="nav__link" activeClassName="nav__link_active">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
