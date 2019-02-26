import React from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from '../../actions';

class LocationShow extends React.Component {
  componentDidMount() {
    this.props.fetchLocation(this.props.match.params.id);
  }

  render() {
    if (!this.props.location) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.props.location.name}</h2>
        <p>{this.props.location.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: state.locations[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchLocation }
)(LocationShow);
