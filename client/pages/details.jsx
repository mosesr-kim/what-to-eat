import React from 'react';
import ReviewList from '../components/review-list';
import Stars from '../components/stars';
import HomeButton from '../components/home-button';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessDetails: null,
      businessReviews: null
    };
  }

  componentDidMount() {
    fetch(`/api/business?businessId=${this.props.businessId}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          businessDetails: data.businessDetails,
          businessReviews: data.businessReviews
        });
      });
  }

  render() {
    if (!this.state.businessDetails || !this.state.businessReviews) return null;

    // destructure hours for open/closed and photos for carousel
    const { categories, location, name, price, rating } = this.state.businessDetails;
    const phoneNumber = this.state.businessDetails.display_phone;
    const imageURL = this.state.businessDetails.image_url;
    const reviewCount = this.state.businessDetails.review_count;
    const displayAddress = location.display_address.join(' ');
    const categoryArray = categories.map(category => category.title);
    const categoryList = categoryArray.join(', ');
    // const open = hours[0].is_open_now ? 'Open now' : 'Closed now';

    return (
      <>
        <HomeButton />
        <div className="details">
          <div className="detailsContainer">
            <div className="detailsHeader row g-0">
              <h2 className="detailsHeaderText d-flex justify-content-center">
                {name}
              </h2>
            </div>
            <div className="detailsInfo row g-0">
              <div className="col-6 detailsImageColumn d-flex justify-content-end">
                <img src={imageURL} alt={`photo of ${this.props.businessId}`} className="detailsImage" />
              </div>
              <div className="col-6 detailsInfoColumn">
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
            </div>
          </div>
        </div>
        <ReviewList businessReviews={this.state.businessReviews} />
      </>
    );
  }
}
