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
    const searchParams = this.state;
    this.props.onSubmit(searchParams);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({ location: this.props.location.zipCode });
    }
  }

  render() {
    return (
      <>
        <div className="col-12 col-md-8 d-flex flex-nowrap justify-content-center justify-content-md-start">
          <form action="" className="searchForm" onSubmit={this.handleSubmit} autoComplete="off">
            <input
              type="text"
              name="restaurant"
              className="restaurantSearchInput"
              id="restaurant"
              placeholder="food, restaurants, businesses..."
              value={this.state.restaurant}
              onChange={this.handleRestaurantChange}
              required
            />
            <input
              type="text"
              name="location"
              className="locationSearchInput"
              id="location"
              placeholder="city, state or zip"
              value={this.state.location}
              onChange={this.handleLocationChange}
              required
            />
            <button type="submit" className="submitButton">
              <i className="fas fa-search searchIcon"></i>
            </button>
          </form>
        </div>
      </>
    );
  }
}
