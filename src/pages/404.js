import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Nie znaleziono strony" />
    <div className="container">
      <h1 className="heading_h1">Nie znaleziono strony</h1>
      <Link to="/">
        <button className="m-t-xl m-b-xl" type="button">
          Przejdź do strony głównej
        </button>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
