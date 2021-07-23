import React from 'react';
import Home from './pages/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      zipCode: null
    };
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleSuccess(position) {
    const { latitude, longitude } = position.coords;
    fetch(`/api/location?lat=${latitude}&lng=${longitude}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zipCode: data
        });
      });
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  render() {
    return <Home location={ this.state } />;
  }
}
