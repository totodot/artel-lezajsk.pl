import React from 'react';
import cx from 'classnames';
import Map from './googleMap';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <h2>footer</h2>
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  </footer>
);
export default Footer;
