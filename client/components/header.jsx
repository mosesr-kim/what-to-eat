import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <div className="header row">
          <i className="fas fa-bars navBarIcon col-1"></i>
          <div className="logo col-2">
            <div className="outerLogoBorder">
              <div className="innerLogoBorder">
                <p className="innerLogoText">
                  &gt;_what to eat?
                </p>
              </div>
            </div>
          </div>
          <form action="" className="searchForm col-4">
            <label htmlFor="search">
              <i className="fas fa-search searchIcon"></i>
            </label>
            <input
            type="text"
            name="restaurant"
            className="searchInput"
            id="search"
            placeholder="food, restaurants, businesses..."
            required/>
            <input
            type="text"
            name="location"
            className="locationSearch"
            id=""
            required/>
          </form>
        </div> */}
      </>
    );
  }
}
