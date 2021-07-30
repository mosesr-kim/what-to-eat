import React from 'react';

export default class Random extends React.Component {
  render() {
    if (this.props.route.path === 'collection') {
      return (
        <i className="fas fa-random randomButton" onClick={this.props.handleRandom}></i>
      );
    } else return null;
  }
}
