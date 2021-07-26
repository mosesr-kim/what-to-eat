import React from 'react';
import AppDrawer from '../components/app-drawer';

export default class NewCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleCreateNewCollection(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <>
        <AppDrawer />
        <div className="newCollectionContainer">
          <div className="newCollectionHeader">
            <h2 className="newCollectionHeaderText">
              New Collection
            </h2>
          </div>
          <form action="" className="newCollectionForm" autoComplete="off" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="newCollection" className="newCollectionLabel">
                Collection Name
              </label>
            </div>
            <input
            type="text"
            name="newCollection"
            className="newCollectionInput"
            id="newCollection"
            placeholder="Best Ramen Shops, Favorite Boba..."
            value={this.state.name}
            onChange={this.handleNameChange}
            required
            />
            <div>
              <label htmlFor="newCollection" className="newCollectionDescription">
                Create a new Collection to save your favorite restaurants
              </label>
            </div>
            <div className="newCollectionButtonContainer">
              <button type="submit" className="newCollectionButton">
                Save
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
