import React from 'react';

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.saved ? this.setState({ saved: !this.state.saved }) : this.setState({ saved: !this.state.saved });
  }

  render() {
    const saved = this.state.saved ? 'fas fa-bookmark' : 'far fa-bookmark';
    return (
      <>
        <i className={`${saved} bookmark`} onClick={this.handleClick}></i>
      </>
    );
  }
}