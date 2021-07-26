import React from 'react';
import Header from '../components/header';
import SearchResults from '../components/search-result';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      location: '',
      searchResults: null
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchParams) {
    fetch(`/api/search?restaurant=${searchParams.restaurant}&location=${searchParams.location}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          restaurant: searchParams.restaurant,
          location: searchParams.location,
          searchResults: data
        });
      });
  }

  render() {
    return (
      <>
        <Header onSubmit={this.handleSearch} location={this.props.location} />
        <SearchResults searchResults={this.state} />
      </>
    );
  }
}
