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
          <li businessid={alias}>
            <div className="restaurantContainer row g-0">
              <div className="imageColumn">
                <img src={imageURL} alt="business image" className="searchImage"/>
              </div>
              <div className="textColumn align-items-start">
                <div className="row g-0">
                  <p className="restaurantNameText">
                    {number}. {name}
                  </p>
                </div>
                <div className="row g-0">
                  <p className="restaurantRating">
                    {rating} <Stars rating={rating} />{reviewCount} Reviews
                  </p>
                </div>
                <div className="row g-0">
                  <p className="restaurantCategory">
                    {price} &#8226; {categoryList}
                  </p>
                </div>
                <div className="row g-0">
                  <p className="restaurantAddress">
                    {displayAddress}
                  </p>
                </div>
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
