import React from 'react';
import cx from 'classnames';
import Map from './googleMap';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1>elo</h1>

          <h1>elo</h1>
          <h1>elo</h1>
          <h1>elo</h1>
          <h1>elo</h1>
          <h1>elo</h1>
        </div>
        <div className="col-12 col-md-6 p-none footer__map-col">
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div className="footer__map-container" />}
            mapElement={<div className="footer__map-element" />}
          />
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
