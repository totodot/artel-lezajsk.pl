import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Banner from '../components/banner/banner';

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" keywords={['gatsby', 'application', 'react']} />
    <Banner />

    <div className="container">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-3/">Go to page 3</Link>

      <div className="container">
        <div className="row">
          <div className="col-6">dsad</div>
          <div className="col-6">dsad</div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
