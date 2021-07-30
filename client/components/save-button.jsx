import React from 'react';

export default class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.handleSave(this.props.collectionId, this.props.saving);
    this.props.handleClick();
  }

  render() {
    if (!this.props.saving) return null;
    return (
      <button className="saveButton" onClick={this.handleSave}>
        Save
      </button>
    );
  }
}
