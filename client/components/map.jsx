import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default class Map extends React.Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={apiKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}
