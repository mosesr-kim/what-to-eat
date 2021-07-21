import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      location: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ restaurant: event.target.value });
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
          <form action="" className="searchForm" onSubmit={ this.handleSubmit }>
            <label htmlFor="search">
              <i className="fas fa-search searchIcon"></i>
            </label>
            <input
              type="text"
              name="restaurant"
              className="searchInput"
              id="search"
              placeholder="food, restaurants, businesses..."
              value={ this.state.value }
              onChange={ this.handleChange }
              required />
          </form>
        </div>
      </div>
    );
  }
}
