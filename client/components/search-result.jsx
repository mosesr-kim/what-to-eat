import React from 'react';
import SearchResultList from './search-result-list';

export default class SearchResults extends React.Component {
  render() {
    const { searchResults, restaurant, location } = this.props.searchResults;
    if (searchResults === null) return null;
    const noResults = searchResults.error ? 'No results for' : '';
    return (
      <>
        <div className="searchResultContainer">
          <div className="searchResultHeader">
            <h2 className="searchResultHeaderText">
              {noResults} {restaurant} near {location}
            </h2>
          </div>
          <SearchResultList searchResults={this.props.searchResults.searchResults} />
        </div>
      </>
    );
  }
}
