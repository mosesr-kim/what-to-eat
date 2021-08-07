import React from 'react';
import SaveButton from './save-button';

export default class CollectionList extends React.Component {
  render() {
    if (!this.props.collections) return null;
    const collectionList = this.props.collections.map((collection, index) => {
      const image = collection.image ? '' : 'hidden';
      return (
        <li className="collectionLi" key={collection.collectionId}>
          <div className="collectionImageColumn">
            <img src={collection.image} alt={`${collection.name} image`} className={`collectionImage ${image}`} />
          </div>
          <div className="collectionTextColumn">
            <p className="collectionNameText">
              {collection.name}
            </p>
            <p className="collectionCountText">
              {collection.count} places saved
            </p>
          </div>
          { this.props.saving
            ? <SaveButton saving={this.props.saving} collectionId={collection.collectionId} handleClick={this.props.handleClick} handleSave={this.props.handleSave} />
            : <a href={`#collection?collectionId=${collection.collectionId}`} className="viewAnchor">View</a>
          }
        </li>
      );
    });
    return (
      <ul className="collectionList">{collectionList}</ul>
    );
  }
}
