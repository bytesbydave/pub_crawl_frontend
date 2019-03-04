import React from 'react';
import { connect } from 'react-redux';
import { createLocation } from '../../actions';
import LocationCreate from './LocationCreate';

class LocationList extends React.Component {
  findBarId(locations) {
    const bars = [];
    for (let bar of locations) {
      bars.push(bar.yelp_id);
    }
    return bars;
  }

  render() {
    const crawlId = this.props.crawl;
    const addedBars = this.findBarId(this.props.addedLocations);
    return this.props.locations.map(location => {
      if (!addedBars.includes(location.id)) {
        return (
          <div key={location.id} className="ui divided items">
            <LocationCreate
              name={location.name}
              crawlId={crawlId}
              imageUrl={location.image_url}
              website={location.url}
              phone={location.display_phone}
              rating={location.rating}
              yelpId={location.id}
              category={location.categories}
              city={location.location.city}
              address={location.location.address1}
            />
          </div>
        );
      } else {
        return <div key={location.id} />;
      }
    });
  }
}

export default connect(
  null,
  { createLocation }
)(LocationList);
