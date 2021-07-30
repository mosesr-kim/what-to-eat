import React from 'react';
import AppDrawer from '../components/app-drawer';
import RandomRestaurant from '../components/random-restaurant';
import Stars from '../components/stars';

export default class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      collectionName: '',
      randomRestaurant: null
    };
    this.getCollection = this.getCollection.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
  }

  getCollection(collectionId) {
    fetch(`/api/collection?collectionId=${collectionId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          collectionName: data[0].name,
          restaurants: data[0].restaurants
        });
      });
  }

  handleRandom() {
    const index = Math.floor(Math.random() * this.state.restaurants.length);
    this.setState({ randomRestaurant: this.state.restaurants[index] });
  }

  componentDidMount() {
    this.getCollection(this.props.collectionId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.collectionId !== prevProps.collectionId) {
      this.getCollection(this.props.collectionId);
    }
  }

  render() {
    const restaurantsLi = this.state.restaurants.map((restaurant, index) => {
      const { alias, categories, location, name, price, rating } = restaurant.json;
      const imageURL = restaurant.json.image_url;
      const reviewCount = restaurant.json.review_count;
      const displayAddress = location.display_address.join(' ');
      const categoryArray = categories.map(category => category.title);
      const categoryList = categoryArray.join(', ');
      return (
        <a key={index} href={`#details?businessId=${alias}`} >
          <li businessid={alias} className="searchResult">
            <div className="restaurantContainer row g-0">
              <div className="imageColumn">
                <img src={imageURL} alt="business image" className="searchImage" />
              </div>
              <div className="textColumn align-items-start">
                <div className="row g-0">
                  <p className="restaurantNameText">
                    {name}
                  </p>
                </div>
                <div className="row g-0">
                  <p className="restaurantRating">
                    {rating} <Stars rating={rating} />{reviewCount} Reviews
                  </p>
                </div>
                <div className="row g-0">
                  <p className="restaurantCategory">
                    {price} &#8226; {categoryList}
                  </p>
                </div>
                <div className="row g-0">
                  <p className="restaurantAddress">
                    {displayAddress}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </a>
      );
    });
    return (
      <>
        <AppDrawer route={this.props.route} handleRandom={this.handleRandom} />
        <div className="searchResultContainer">
          <div className="collectionHeader">
            <h2 className="collectionHeaderText">
              {this.state.collectionName}
            </h2>
          </div>
          <ul className="searchResultList">{restaurantsLi}</ul>
        </div>
        <RandomRestaurant randomRestaurant={this.state.randomRestaurant} />
      </>
    );
  }
}
