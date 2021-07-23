import React from 'react';

export default class Stars extends React.Component {
  render() {
    const { rating } = this.props;
    const stars = Array(5).fill().map((_, index) => {
      if (index + 1 <= rating) return <i className="fas fa-star" key={index}/>;
      if (index + 0.5 <= rating) return <i className="fas fa-star-half-alt" key={index}/>;
      return <i className="far fa-star" key={index}></i>;
    });
    return (
      <>
        {stars}
      </>
    );
  }
}
