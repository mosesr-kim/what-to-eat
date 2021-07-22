import React from 'react';

export default class Stars extends React.Component {
  render() {
    const rating = this.props.rating;
    let star1 = rating >= 1 ? 'fas fa-star' : 'far fa-star';
    if (rating === 0.5) star1 = 'fas fa-star-half-alt';
    let star2 = rating >= 2 ? 'fas fa-star' : 'far fa-star';
    if (rating === 1.5) star2 = 'fas fa-star-half-alt';
    let star3 = rating >= 3 ? 'fas fa-star' : 'far fa-star';
    if (rating === 2.5) star3 = 'fas fa-star-half-alt';
    let star4 = rating >= 4 ? 'fas fa-star' : 'far fa-star';
    if (rating === 3.5) star4 = 'fas fa-star-half-alt';
    let star5 = rating >= 5 ? 'fas fa-star' : 'far fa-star';
    if (rating === 4.5) star5 = 'fas fa-star-half-alt';
    return (
      <>
        <span className="stars">
          <i className={ star1 }></i>
          <i className={ star2 }></i>
          <i className={ star3 }></i>
          <i className={ star4 }></i>
          <i className={ star5 }></i>
        </span>
      </>
    );
  }
}
