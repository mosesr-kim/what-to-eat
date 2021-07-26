import React from 'react';

export default class HomeButton extends React.Component {
  render() {
    return (
      <>
        <div className="homeButton row g-0">
          <a href="#" className="homeButtonAnchor">
            <i className="fas fa-chevron-left leftChevron"></i>
            <p className="homeButtonText">Home</p>
          </a>
        </div>
      </>
    );
  }
}
