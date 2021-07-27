import React from 'react';

export default class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/api/collections')
      .then(response => response.json());
    // .then(data => console.log(data));
  }

  render() {
    return (
      <>
        <ul className="collectionList"></ul>
      </>
    );
  }
}
