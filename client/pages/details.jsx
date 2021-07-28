import React from 'react';
import ReviewList from '../components/review-list';
import Stars from '../components/stars';
import Carousel from 'react-bootstrap/Carousel';
import AppDrawer from '../components/app-drawer';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessDetails: null,
      businessReviews: null,
      saving: null
    };
  }

  componentDidMount() {
    fetch(`/api/business?businessId=${this.props.businessId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          businessDetails: data.businessDetails,
          businessReviews: data.businessReviews
        });
      });
  }

  render() {
    if (!this.state.businessDetails || !this.state.businessReviews) return null;

    const { categories, location, name, price, rating, photos } = this.state.businessDetails;
    const phoneNumber = this.state.businessDetails.display_phone;
    const reviewCount = this.state.businessDetails.review_count;
    const displayAddress = location.display_address.join(' ');
    const categoryArray = categories.map(category => category.title);
    const categoryList = categoryArray.join(', ');
    return (
      <>
        <AppDrawer route={this.props.route} businessId={this.props.businessId} />
        <div className="details">
          <div className="detailsContainer">
            <div className="detailsHeader row g-0">
              <h2 className="detailsHeaderText d-flex justify-content-center">
                {name}
              </h2>
            </div>
            <div className="detailsInfo row g-0">
              <div className="col"></div>
              <div className="col-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-end">
                <Carousel fade className="detailsImageColumn">
                  <Carousel.Item interval={4000}>
                    <img
                      className="d-block w-100 detailsImage"
                      src={photos[0]}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="d-block w-100 detailsImage"
                      src={photos[1]}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={4000}>
                    <img
                      className="d-block w-100 detailsImage"
                      src={photos[2]}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-6 col-md-5 col-lg-4 col-xl-3 detailsInfoColumn">
                <div className="row detailsCategory g-0">
                  <p>
                    {price} &#8226; {categoryList}
                  </p>
                </div>
                <div className="row detailsRating g-0">
                  <p>
                    {rating} <Stars rating={rating} />{reviewCount} Reviews
                  </p>
                </div>
                <div className="row detailsAddress g-0">
                  <p>
                    {displayAddress}
                  </p>
                </div>
                <div className="row detailsPhoneNumber g-0">
                  <p>
                    {phoneNumber}
                  </p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        <ReviewList businessReviews={this.state.businessReviews} />
      </>
    );
  }
}
