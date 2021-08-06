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
  }

  directionsCallback(response) {
    if (response !== null) {
      if (response.status === 'OK') {
        this.setState({ response });
      }
    }
  }

  componentDidMount() {
    if (this.props.lat !== null && this.props.lng !== null) {
      fetch(`/api/address?lat=${this.props.lat}&lng=${this.props.lng}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            origin: data,
            destination: this.props.displayAddress
          });
        });
    } else {
      this.setState({ destination: this.props.displayAddress });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      fetch(`/api/address?lat=${this.props.lat}&lng=${this.props.lng}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            origin: data,
            destination: this.props.displayAddress
          });
        });
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
