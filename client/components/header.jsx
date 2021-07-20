import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

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
          <form action="" className="searchForm">
            <label htmlFor="search">
              <i className="fas fa-search searchIcon"></i>
            </label>
            <input
              type="text"
              name="restaurant"
              className="searchInput"
              id="search"
              placeholder="food, restaurants, businesses..."
              required />
          </form>
        </div>
      </div>
    );
  }
}
