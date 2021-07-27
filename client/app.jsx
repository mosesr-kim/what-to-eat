import React from 'react';
import parseRoute from './lib/parse-route';
import Home from './pages/home';
import Details from './pages/details';
import NewCollection from './pages/new-collection';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      zipCode: null,
      route: parseRoute(window.location.hash)
    };
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleCreateNewCollection = this.handleCreateNewCollection.bind(this);
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

  handleCreateNewCollection(collectionName) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: collectionName })
    };
    fetch('/api/collection', init)
      .then(response => response.json())
      .then(data => {
      });
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home location={this.state} />;
    }
    if (route.path === 'details') {
      const businessId = route.params.get('businessId');
      return <Details businessId={businessId} route={this.state.route} />;
    }
    if (route.path === 'newCollection') {
      return <NewCollection handleCreateNewCollection={this.handleCreateNewCollection} />;
    }
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}
