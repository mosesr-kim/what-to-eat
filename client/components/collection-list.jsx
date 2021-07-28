import React from 'react';

export default class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.collections) return null;
    const collectionList = this.props.collections.map((collection, index) => {
      const image = collection.image ? '' : 'hidden';
      return (
        <li key={collection.collectionId} className="collectionLi">
          <div className="collectionImageColumn">
            <img src={collection.image} alt={`${collection.name} image`} className={`collectionImage ${image}`} />
          </div>
          <div className="collectionTextColumn">
            <h3 className="collectionNameText">
              {collection.name}
            </h3>
            <h3 className="collectionCountText">
              {collection.count} places saved
            </h3>
          </div>
        </li>
      );
    });
    return (
      <>
        <ul className="collectionList">{collectionList}</ul>
      </>
    );
  }
}
