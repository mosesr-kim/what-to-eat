import React from 'react';
import Bookmark from './bookmark';
import CollectionList from './collection-list';
import Random from './random-button';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      saving: null,
      collections: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  handleClick(event) {
    this.setState({ isOpen: !this.state.isOpen, saving: null });
    fetch('/api/collections')
      .then(response => response.json())
      .then(data => this.setState({ collections: data }));
  }

  openDrawer(event) {
    this.setState({ isOpen: true, saving: this.props.businessId });
    fetch('/api/collections')
      .then(response => response.json())
      .then(data => this.setState({ collections: data }));
  }

  render() {
    const open = this.state.isOpen ? '' : 'hidden';
    return (
      <>
        <div className="navBar">
          <i className="fas fa-bars navBarIcon" onClick={this.handleClick}></i>
          <Bookmark route={this.props.route} openDrawer={this.openDrawer} isSaved={this.props.isSaved} />
          <Random route={this.props.route} handleRandom={this.props.handleRandom} />
        </div>
        <div className={`appDrawer ${open}`}>
          <div className="createNewCollectionLink">
            <a href="#newCollection" className="newCollectionLink">
              <i className="fas fa-plus plusIcon"></i>
              <p className="createNewCollectionText">
                Create a new Collection
              </p>
            </a>
          </div>
          <CollectionList saving={this.state.saving} collections={this.state.collections} handleClick={this.handleClick} handleSave={this.props.handleSave} />
        </div>
        <div className={`appDrawerBackground ${open}`} onClick={this.handleClick}></div>
      </>
    );
  }
}
