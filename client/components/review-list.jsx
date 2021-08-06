import React from 'react';
import Stars from './stars';

export default class ReviewList extends React.Component {
  render() {
    const businessReviews = this.props.businessReviews.reviews;
    if (!businessReviews) return null;
    const reviewsLi = businessReviews.map((review, index) => {
      const { rating, text, user } = review;
      const { name } = user;
      return (
        <li key={index} className="reviewLi row g-0">
          <div className="row g-0">
            <p className="reviewRating">
              {name} <span className="stars"><Stars rating={rating} /></span>
            </p>
          </div>
          <div className="row g-0">
            <p className="reviewText">
              &quot;{text}&quot;
            </p>
          </div>
        </li>
      );
    });

    return (
      <>
        <div className="reviewsContainer">
          <div className="reviewsInnerContainer">
            <div className="reviewHeader">
              <h2 className="reviewHeaderText">Reviews</h2>
            </div>
            <ul className="reviewList">{reviewsLi}</ul>
          </div>
        </div>
      </>
    );
  }
}
