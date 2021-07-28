import React from 'react';

export default class SaveButton extends React.Component {
  render() {
    return (
      <button className="saveButton" onClick={this.props}>
        Save
      </button>
    );
  }
}
