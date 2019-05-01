import React from 'react';
import BarsDisplay from '../bars/BarsDisplay';
import { connect } from 'react-redux';
import { fetchCrawl, fetchLocations, deleteLocation } from '../../actions';
import dateFormat from 'dateformat';
import './Crawl.css';

class CrawlShow extends React.Component {
  componentDidMount() {
    this.props.fetchCrawl(this.props.match.params.id);
    this.props.fetchLocations(this.props.match.params.id);
  }

  showAdmin(website, id) {
    if (
      this.props.isSignedIn &&
      this.props.userId === this.props.crawl.userId
    ) {
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <a
              className="ui basic green button"
              href={website}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Site
            </a>
            <div
              className="ui basic red button"
              onClick={() => this.props.deleteLocation(id)}
            >
              Remove
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <a
              className="ui basic green button"
              href={website}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Site
            </a>
          </div>
        </div>
      );
    }
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
          {this.showAdmin(location.website, location.id)}
        </div>
      );
    });
  }

  renderBarsSearch() {
    return (
      <div>
        <BarsDisplay
          crawl={this.props.crawl}
          locations={this.props.locations}
        />
      </div>
    );
  }

  render() {
    if (!this.props.crawl) {
      return <div className="ui container screen-container">Loading...</div>;
    }
    const date = new Date(this.props.crawl.start_time);
    if (
      this.props.isSignedIn &&
      this.props.userId === this.props.crawl.userId
    ) {
      return (
        <div className="ui container screen-container">
          <h1>Pub Crawl Itinerary for {this.props.crawl.name}</h1>
          <h3>{dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM TT')}</h3>
          <div className="ui cards">{this.renderList()}</div>
          {this.renderBarsSearch()}
        </div>
      );
    } else {
      return (
        <div className="ui container screen-container">
          <h1>Pub Crawl Itinerary for {this.props.crawl.name}</h1>
          <h3>{dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM TT')}</h3>
          <div className="ui cards">{this.renderList()}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    crawl: state.crawls[ownProps.match.params.id],
    locations: Object.values(state.locations),
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchCrawl, fetchLocations, deleteLocation }
)(CrawlShow);
