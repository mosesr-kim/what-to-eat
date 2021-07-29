import React from 'react';

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.openDrawer();
  }

  render() {
    if (this.props.route.path === 'details') {
      const saved = this.props.isSaved ? 'fas fa-bookmark' : 'far fa-bookmark';
      return (
        <>
          <i className={`${saved} bookmark`} onClick={this.handleAdd}></i>
        </>
      );
    } else return null;
  }
}
