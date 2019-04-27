import React from 'react';
import { connect } from 'react-redux';
import { createLocation } from '../../actions';

class LocationCreate extends React.Component {
  addBar = formValues => {
    this.props.createLocation(
      this.props.crawlId,
      this.props.name,
      this.props.imageUrl,
      this.props.website,
      this.props.phone,
      this.props.rating,
      this.props.yelpId,
      this.props.category,
      this.props.city,
      this.props.address
    );
  };

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.imageUrl} alt="bar-pic" />
        </div>
        <div className="content">
          <a className="header" href={this.props.website}>
            {this.props.name}
          </a>
          <div className="meta">
            <span className="cinema">{this.props.address}</span>
          </div>
          <div className="meta">
            <span className="cinema">{this.props.city}</span>
          </div>
          <div className="description">
            <p />
          </div>
          <div className="extra">
            <div
              className="ui right floated primary button"
              onClick={this.addBar}
            >
              Add Bar
              <i className="right chevron icon" />
            </div>
            <div className="ui label">Rating: {this.props.rating} Stars</div>
            <div className="ui label">
              <i className="globe icon" />{this.props.category[0].title}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createLocation }
)(LocationCreate);
