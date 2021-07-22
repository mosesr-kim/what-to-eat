import React from 'react';

export default class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let counter = 1;
    const searchResults = this.props.searchResults;
    const searchResultsLi = searchResults.map(result => {
      const { id, name, categories, rating, price, location } = result;
      const imageURL = result.image_url;
      const reviewCount = result.review_count;
      const displayAddress = location.display_address.join(' ');
      const categoryArray = categories.map(category => category.title);
      const categoryList = categoryArray.join(', ');
      const number = counter;
      counter++;

      return (
        <li key={ id }>
          <div className="restaurantContainer">
            <div className="imageColumn">
              <img src={ imageURL } alt="business image" />
            </div>
            <div className="textColumn">
              <div className="row">
                <h3 className="restaurantNameText">
                  { number }. { name }
                </h3>
              </div>
              <div className="row">
                <p className="restaurantRating">
                  { rating } { reviewCount } Reviews
                </p>
              </div>
              <div className="row">
                <p className="restaurantCategory">
                  { price } &#8226; { categoryList }
                </p>
              </div>
              <div className="row">
                <p className="restaurantAddress">
                  { displayAddress }
                </p>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <ul className="searchResultList">{ searchResultsLi }</ul>
    );
  }
}
