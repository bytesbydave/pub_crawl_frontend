import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createLocation } from '../../actions';
import 'semantic-ui-css/semantic.min.css';
import './Bar.css';

class BarItem extends React.Component {
  render() {
    const { bar } = this.props;
    const renderCategories = bar.categories.map(category => {
      return <span key={category.title}>| {category.title}</span>;
    });
    const displayAddress = bar.location.display_address.map(address => {
      return <span key={address}> {address} </span>;
    });

    return (
      <div className="card">
        <div className="image bar-img">
          <img src={bar.image_url} alt="bar-pic" />
        </div>
        <div className="content">
          <div className="header">{bar.name}</div>
          <div className="meta">{renderCategories}</div>
          <div className="description">{displayAddress}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <button
              onClick={() => this.props.createLocation(this.props.crawl, bar)}
              className="mini ui secondary basic button"
            >
              Add Bar
            </button>
          </span>
          <span>Rating: {bar.rating} Stars</span>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createLocation: (event) => dispatch(createLocation(event))
//   };
// };

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { createLocation }
)(BarItem);
