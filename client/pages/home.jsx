import React from 'react';
import Header from '../components/header';
import SearchResults from '../components/search-result';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      location: '',
      searchResults: null,
      searched: false
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
          searchResults: data,
          searched: true
        });
      });
  }

  render() {
    const searched = this.state.searched ? 'hidden' : '';
    return (
      <>
        <Header onSubmit={this.handleSearch} location={this.props.location} route={this.props.route} />
        <div className={`instructions ${searched}`}>
          <p className="instructionsText">
            Search for your favorite restaurant
          </p>
        </div>
        <SearchResults searchResults={this.state} />
      </>
    );
  }
}
