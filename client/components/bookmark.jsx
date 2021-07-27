import React from 'react';

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    if (this.state.saved === false) {
      this.setState({ saved: true });
      this.props.addRestaurant();
    }
  }

  render() {
    if (this.props.route) {
      if (this.props.route.path === 'details') {
        const saved = this.state.saved ? 'fas fa-bookmark' : 'far fa-bookmark';
        return (
          <>
            <i className={`${saved} bookmark`} onClick={this.handleAdd}></i>
          </>
        );
      }
    } else {
      return null;
    }
  }
}
