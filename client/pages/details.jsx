import React from 'react';

export default class Details extends React.Component {
  componentDidMount() {
    fetch(`/api/business?businessId=${this.props.businessId}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
      });
  }

  render() {
    return (
      <>
      </>
    );
  }
}
