import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => {
  const menuLinks = [
    {
      name: 'o nas',
      link: '',
    },
    {
      name: 'aktualności',
      link: '',
    },
    {
      name: 'dlaczego my?',
      link: '',
    },
    {
      name: 'oferta',
      link: '',
    },
    {
      name: 'kontakt',
      link: '',
    },
  ];
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">{{ siteTitle }}</div>
        <nav className="nav">
          <ul className="nav__list">
            {menuLinks.map(({ name }) => (
              <li className="nav__item">
                <a href="/" className="nav__link">
                  {name}
                </a>
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
