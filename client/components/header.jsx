import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <i className="fas fa-bars navBarIcon"></i>
          <div className="logo">
            <div className="innerLogo">
              &gt;_what to eat?
            </div>
          </div>
          {/* <img src="logo.svg" alt="logo" className="logo" /> */}
        </div>
      </>
    );
  }
}
