import React from 'react';

export default class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log('mounted');
  }

  render() {
    return (
      <>
        <ul className="collectionList"></ul>
      </>
    );
  }
}
