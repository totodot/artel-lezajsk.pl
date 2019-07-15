import React, { useState } from 'react';
import { navigate } from 'gatsby';
import pathsMap from '../../pathsMap';
import Layout from '../components/layout';
import SEO from '../components/seo';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Contact = () => {
  const [formState, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => {
        navigate(`/${pathsMap.success}`);
      })
      .catch(error => alert(error));
  };
  return (
    <Layout>
      <SEO title="Kontakt" />
      <div className="container">
        <h1 className="heading_h1">Kontakt</h1>
        <div className="row">
          <div className="col">
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill out:
                  {' '}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your name:
                  <br />
                  <input type="text" name="name" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your email:
                  <br />
                  <input type="email" name="email" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message:
                  <br />
                  <textarea name="message" onChange={handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
