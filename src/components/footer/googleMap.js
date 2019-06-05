import React from 'react';

import {
  GoogleMap, Marker, withGoogleMap, withScriptjs,
} from 'react-google-maps';
import mapPin from '../../images/map-pin.png';

const iconOptions = {
  url: mapPin,
};

const position = { lat: 50.253100, lng: 22.421230 };

const Map = withScriptjs(
  withGoogleMap(() => (
    <div>
      <GoogleMap defaultZoom={17} defaultCenter={position}>
        <Marker icon={iconOptions} position={position} />
      </GoogleMap>
    </div>
  )),
);

export default Map;
