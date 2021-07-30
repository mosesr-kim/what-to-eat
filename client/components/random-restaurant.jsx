import React from 'react';
import Stars from './stars';

export default class RandomRestaurant extends React.Component {
  render() {
    if (!this.props.randomRestaurant) return null;
    const { businessId, json } = this.props.randomRestaurant;
    const { categories, location, name, price, rating } = json;
    const imageURL = json.image_url;
    const reviewCount = json.review_count;
    const displayAddress = location.display_address.join(' ');
    const categoryArray = categories.map(category => category.title);
    const categoryList = categoryArray.join(', ');
    return (
      <div className='randomModalContainer' >
        <div className="randomModal">
          <h3 className="randomRestaurantHeader">
            {name}
          </h3>
          <div className="randomRestaurant">
            <a href={`#details?businessId=${businessId}`} >
              <div className="restaurantContainer row g-0">
                <div className="randomImageColumn">
                  <img src={imageURL} alt="business image" className="randomImage" />
                </div>
                <div className="randomTextColumn align-items-start">
                  <div className="row g-0">
                    <p className="randomRestaurantNameText">
                      {name}
                    </p>
                  </div>
                  <div className="row g-0">
                    <p className="randomRestaurantRating">
                      {rating} <Stars rating={rating} />{reviewCount} Reviews
                    </p>
                  </div>
                  <div className="row g-0">
                    <p className="randomRestaurantCategory">
                      {price} &#8226; {categoryList}
                    </p>
                  </div>
                  <div className="row g-0">
                    <p className="randomRestaurantAddress">
                      {displayAddress}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="closeButtonRow">
            <button className="randomCloseButton" onClick={this.props.closeModal} >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
