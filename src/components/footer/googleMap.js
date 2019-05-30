import React from 'react';

import {
  GoogleMap, Marker, withGoogleMap, withScriptjs,
} from 'react-google-maps';
import logoMark from '../../images/logo-mark.svg';

const Map = withScriptjs(
  withGoogleMap(() => (
    <div>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker icon={logoMark} position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    </div>
  )),
);

export default Map;
