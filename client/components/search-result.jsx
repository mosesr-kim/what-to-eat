import React from 'react';
import SearchResultList from './search-result-list';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { searchResults, restaurant, location } = this.props.searchResults;
    if (!searchResults) {
      return null;
    }
    return (
      <>
        <div className="searchResultHeader">
          <h2 className="searchResultHeaderText">
            {restaurant} near {location}
          </h2>
        </div>
        <div className="searchResultContainer">
          <SearchResultList searchResults={this.props.searchResults.searchResults} />
        </div>
      </>
    );
  }
}
