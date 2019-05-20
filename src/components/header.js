import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const menuLinks = [
    {
      name: "o nas",
      link: "",
    },
    {
      name: "aktualności",
      link: "",
    },
    {
      name: "dlaczego my?",
      link: "",
    },
    {
      name: "oferta",
      link: "",
    },
    {
      name: "kontakt",
      link: "",
    },
  ]
  return (
    <header class="header">
      <div className="container header__container">
        <div className="header__logo" />
        <nav className="nav">
          <ul className="nav__list">
            {menuLinks.map(({ name, link }) => (
              <li className="nav__item">
                <a className="nav__link" href="">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
