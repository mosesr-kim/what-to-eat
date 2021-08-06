import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      travelMode: 'DRIVING',
      origin: '',
      destination: ''
    };
    this.directionsCallback = this.directionsCallback.bind(this);
    this.getOrigin = this.getOrigin.bind(this);
    this.getDestination = this.getDestination.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  directionsCallback(response) {
    if (response !== null) {
      if (response.status === 'OK') {
        this.setState({ response });
      }
    }
  }

  getOrigin(ref) {
    this.origin = ref;
  }

  getDestination(ref) {
    this.destination = ref;
  }

  onClick() {
    if (this.origin.value !== '' && this.destination.value !== '') {
      this.setState({ origin: this.origin.value, destination: this.destination.value });
    }
  }

  render() {
    return (
      <div className="mapContainer">
        <div className="mapInnerContainer">
          <div className="mapHeader">
            <h2 className="mapHeaderText">Map</h2>
          </div>

          <div className='map'>
            <div className='map-settings'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <br />
                    <input id='ORIGIN' className='form-control' type='text' ref={this.getOrigin} placeholder="Origin" autoComplete="off" />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group'>
                    <br />
                    <input id='DESTINATION' className='form-control' type='text' ref={this.getDestination} placeholder="Destination" autoComplete="off" />
                  </div>
                </div>
              </div>
              <div className="routeButtonRow">
                <button className='routeButton' type='button' onClick={this.onClick}>
                  Route
                </button>
              </div>
            </div>

            <div className='map-container'>
              <LoadScript googleMapsApiKey={apiKey} >
                <GoogleMap
                  id='direction-example'
                  mapContainerStyle={{ height: '500px', width: '100%' }}
                  zoom={12}
                  center={{ lat: 33.634869, lng: -117.740448 }}
                >
                  {
                    (
                      this.state.destination !== '' &&
                      this.state.origin !== ''
                    ) && (
                      <DirectionsService
                        options={{
                          destination: this.state.destination,
                          origin: this.state.origin,
                          travelMode: this.state.travelMode
                        }}
                        callback={this.directionsCallback}
                      />
                    )
                  }

                  {
                    this.state.response !== null && (
                      <DirectionsRenderer
                        options={{
                          directions: this.state.response
                        }}
                      />
                    )
                  }
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
