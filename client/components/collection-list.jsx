import React from 'react';
import SaveButton from './save-button';

export default class CollectionList extends React.Component {
  render() {
    if (!this.props.collections) return null;
    const collectionList = this.props.collections.map((collection, index) => {
      const image = collection.image ? '' : 'hidden';
      return (
        <a href={`#collection?collectionId=${collection.collectionId}`} key={collection.collectionId}>
          <li className="collectionLi">
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
            <SaveButton saving={this.props.saving} collectionId={collection.collectionId} handleClick={this.props.handleClick} handleSave={this.props.handleSave} />
          </li>
        </a>
      );
    });
    return (
      <>
        <ul className="collectionList">{collectionList}</ul>
      </>
    );
  }
}
