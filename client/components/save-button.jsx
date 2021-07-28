import React from 'react';

export default class SaveButton extends React.Component {
  render() {
    if (!this.props.saving) {
      return null;
    }
    return (
      <button className="saveButton" onClick={this.props}>
        Save
      </button>
    );
  }
}
