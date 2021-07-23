import React from 'react';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessDetails: null,
      businessReviews: null
    };
  }

  componentDidMount() {
    fetch(`/api/business?businessId=${this.props.businessId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          businessDetails: data.businessDetails,
          businessReviews: data.businessReviews
        });
      });
  }

  render() {
    return (
      <>
      </>
    );
  }
}
