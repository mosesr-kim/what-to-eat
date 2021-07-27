import React from 'react';
import Bookmark from './bookmark';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const open = this.state.isOpen ? '' : 'hidden';
    return (
      <>
        <div className="navBar">
          <i className="fas fa-bars navBarIcon" onClick={this.handleClick}></i>
          <Bookmark route={this.props.route} />
        </div>
        <div className={`appDrawer ${open}`}>
          <div className="createNewCollectionLink">
            <a href="#newCollection" onClick={this.handleClick} className="newCollectionLink">
              <i className="fas fa-plus plusIcon"></i>
              <p className="createNewCollectionText">
                Create a new Collection
              </p>
            </a>
          </div>
        </div>
        <div className={`appDrawerBackground ${open}`} onClick={this.handleClick}></div>
      </>
    );
  }
}
