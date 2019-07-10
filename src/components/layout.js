/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, StaticQuery } from 'gatsby';

import Header from './header/header';
import Footer from './footer';
// import "./layout.css"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return (
    <div className="app">
      <div className="app__header">
        <Header siteTitle={site.siteMetadata.title} />
      </div>
      <div className="app__main">
        <main>{children}</main>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
