import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      location: ''
    };
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRestaurantChange() {
    this.setState({ restaurant: event.target.value });
    // console.log(event.target.value);
  }

  handleLocationChange() {
    this.setState({ location: event.target.value });
    // console.log(event.target.value);
  }

  handleSubmit() {
    event.preventDefault();
    event.target.reset();
    // console.log(this.state);
  }

  render() {
    return (
      <div className="header row">
        <div className="col-1">
          <i className="fas fa-bars navBarIcon"></i>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start">
          <img src="logo.svg" alt="what to eat logo" className="logo" />
        </div>
        <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start">
          <form action="" className="searchForm" onSubmit={this.handleSubmit}>
            <div className="inputContainer">
              <label htmlFor="restaurant">
                <i className="fas fa-search searchIcon"></i>
              </label>
              <input
                type="text"
                name="restaurant"
                className="restaurantSearchInput"
                id="restaurant"
                placeholder="food, restaurants, businesses..."
                value={this.state.value}
                onChange={this.handleRestaurantChange}
                required
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="location">
                <i className="fas fa-map-marker-alt markerIcon"></i>
              </label>
              <input
                type="text"
                name="location"
                className="locationSearchInput"
                id="location"
                placeholder="city, state or zip"
                value={this.state.value}
                onChange={this.handleLocationChange}
                required
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
