import React from 'react';
import { connect } from 'react-redux';
import { createLocation } from '../../actions';
import LocationCreate from './LocationCreate';

class LocationList extends React.Component {
  render() {
    const crawlId = this.props.crawl;
    return this.props.locations.map(location => {
      return (
        <div key={location.id}>
          <LocationCreate name={location.name} crawlId={crawlId} />
        </div>
      );
    });
  }
}

export default connect(
  null,
  { createLocation }
)(LocationList);
