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
          <div className="logoOuterBorder">
            <div className="logoInnerBorder">
              <p className="logoText">
                &gt;_what to eat?
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
