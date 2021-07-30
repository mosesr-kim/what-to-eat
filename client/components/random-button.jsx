import React from 'react';

export default class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.route.path === 'collection') {
      return (
        <>
          <i className="fas fa-random randomButton"></i>
        </>
      );
    } else return null;
  }
}
