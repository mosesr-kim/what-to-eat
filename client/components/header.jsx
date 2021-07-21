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

  handleRestaurantChange(event) {
    this.setState({ restaurant: event.target.value });
    // console.log(event.target.value);
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
    // console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    // console.log(this.state);
    const req = {
      method: 'GET',
      headers: {
        restaurant: this.state.restaurant,
        location: this.state.location
      }
    };

    fetch('/api/businesses', req);
    // .then(response => console.log(response));
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
        <div className="col-12 col-md-8 d-flex flex-nowrap justify-content-center justify-content-md-start">
          <form action="" className="searchForm" onSubmit={this.handleSubmit}>
            {/* <div className="inputContainer"> */}
              {/* <label htmlFor="restaurant">
                <i className="fas fa-search searchIcon"></i>
              </label> */}
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
            {/* </div> */}
            {/* <div className="inputContainer"> */}
              {/* <label htmlFor="location">
                <i className="fas fa-map-marker-alt markerIcon"></i>
              </label> */}
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
            {/* </div> */}
              <button type="submit" className="submitButton">
                <i className="fas fa-search searchIcon"></i>
              </button>
          </form>
        </div>
      </div>
    );
  }
}
