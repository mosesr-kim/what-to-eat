import React from 'react';
import SearchForm from './search-form';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header row g-0">
          <div className="col-1">
            <i className="fas fa-bars navBarIcon"></i>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start">
            <img src="logo.svg" alt="what to eat logo" className="logo" />
          </div>
          <SearchForm onSubmit={ this.props.onSubmit } />
        </div>
      </>
    );
  }
}
