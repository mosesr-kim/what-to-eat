import React from 'react';

export default class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ collectionId: this.props.collectionId, businessId: this.props.saving })
    };
    fetch(('/api/restaurant'), init);
  }

  render() {
    if (!this.props.saving) {
      return null;
    }
    return (
      <button className="saveButton" onClick={this.handleSave}>
        Save
      </button>
    );
  }
}
