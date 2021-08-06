import React from 'react';
import Stars from './stars';

export default class SearchResultList extends React.Component {
  render() {
    const searchResults = this.props.searchResults;
    if (searchResults.error) return null;

    const searchResultsLi = searchResults.map((result, index) => {
      const number = index + 1;
      const { id, alias, name, categories, rating, price, location } = result;
      const imageURL = result.image_url;
      const reviewCount = result.review_count;
      const displayAddress = location.display_address.join(' ');
      const categoryArray = categories.map(category => category.title);
      const categoryList = categoryArray.join(', ');

      return (
        <a key={id} href={`#details?businessId=${alias}`}>
          <li businessid={alias} className="searchResult">
            <div className="restaurantContainer row g-0">
              <div className="imageColumn">
                <img src={imageURL} alt="business image" className="searchImage"/>
              </div>
              <div className="textColumn align-items-start">
                <p className="restaurantNameText">
                  {number}. {name}
                </p>
                <p className="restaurantRating">
                  {rating} <Stars rating={rating} />{reviewCount} Reviews
                </p>
                <p className="restaurantCategory">
                  {price} &#8226; {categoryList}
                </p>
                <p className="restaurantAddress">
                  {displayAddress}
                </p>
              </div>
            </div>
          </li>
        </a>
      );
    });

    return (
      <ul className="searchResultList">{searchResultsLi}</ul>
    );
  }
}
