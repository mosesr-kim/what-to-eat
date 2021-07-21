import React from 'react';

export default class SearchForm extends React.Component {
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
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const searchParams = this.state;
    this.props.onSubmit(searchParams);
  }

  render() {
    return (
      <div className="col-12 col-md-8 d-flex flex-nowrap justify-content-center justify-content-md-start">
        <form action="" className="searchForm" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            name="restaurant"
            className="restaurantSearchInput"
            id="restaurant"
            placeholder="food, restaurants, businesses..."
            value={ this.state.value }
            onChange={ this.handleRestaurantChange }
            required
          />
          <input
            type="text"
            name="location"
            className="locationSearchInput"
            id="location"
            placeholder="city, state or zip"
            value={ this.state.value }
            onChange={ this.handleLocationChange }
            required
          />
          <button type="submit" className="submitButton">
            <i className="fas fa-search searchIcon"></i>
          </button>
        </form>
      </div>
    );
  }
}
