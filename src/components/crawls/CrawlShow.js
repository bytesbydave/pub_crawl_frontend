import React from 'react';
import BarsDisplay from '../bars/BarsDisplay';
import { connect } from 'react-redux';
import { fetchCrawl, fetchLocations, deleteLocation } from '../../actions';
import './Crawl.css';

class CrawlShow extends React.Component {
  componentDidMount() {
    this.props.fetchCrawl(this.props.match.params.id);
    this.props.fetchLocations(this.props.match.params.id);
  }

  renderList() {
    return this.props.locations.map(location => {
      return (
        <div className="card" key={location.id}>
          <div className="content">
            <div className="right floated bar-content">
              <img
                alt="bar"
                className="right floated mini ui image bar-mage"
                src={location.image_url}
              />
            </div>
            <div className="header">{location.name}</div>
            <div className="meta">{location.category}</div>
            <div className="description">
              <span>
                {location.address} {location.city}
              </span>
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <a
                className="ui basic green button"
                href={location.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Site
              </a>
              <div
                className="ui basic red button"
                onClick={() => this.props.deleteLocation(location.id)}
              >
                Remove
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderBarsSearch() {
    return (
      <div>
        <BarsDisplay crawl={this.props.crawl} locations={this.props.locations} />
      </div>
    );
  }

  render() {
    if (!this.props.crawl) {
      return <div className="ui container screen-container">Loading...</div>;
    }
    return (
      <div className="ui container screen-container">
        <h1>Pub Crawl Itinerary for {this.props.crawl.name}</h1>
        <div className="ui cards">{this.renderList()}</div>
        {this.renderBarsSearch()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    crawl: state.crawls[ownProps.match.params.id],
    locations: Object.values(state.locations)
  };
};

export default connect(
  mapStateToProps,
  { fetchCrawl, fetchLocations, deleteLocation }
)(CrawlShow);
