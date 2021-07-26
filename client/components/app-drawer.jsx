import React from 'react';

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
        <i className="fas fa-bars navBarIcon" onClick={this.handleClick}></i>
        <div className={`appDrawer ${open}`}>
        </div>
        <div className={`appDrawerBackground ${open}`} onClick={this.handleClick}></div>
      </>
    );
  }
}
