import React from 'react';
import { connect } from 'react-redux';
import { fetchCrawl, fetchLocations } from '../../actions';
import './Crawl.css'

class CrawlShow extends React.Component {
  componentDidMount() {
    this.props.fetchCrawl(this.props.match.params.id);
    this.props.fetchLocations(this.props.match.params.id);
  }

  renderList() {
    return this.props.locations.map(location => {
      return (
        <div className="item" key={location.id}>
          <div className="image">
            <img src={location.image_url} alt="bar" />
          </div>
          <div className="content">
            <a
              className="header"
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location.name}
            </a>
            <div className="meta">
              <span className="cinema">{location.address}</span>
            </div>
            <div className="meta">
              <span className="cinema">{location.city}</span>
            </div>
            <div className="description">
              <p>{location.description}</p>
            </div>
            <div className="extra">
              <div className="ui label">Rating: {location.rating} Stars</div>
              <div className="ui label">
                <i className="globe icon" /> {location.category}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.crawl) {
      return <div className="ui container screen-container">Loading...</div>;
    }
    return (
      <div className="ui container screen-container">
        <h1>Pub Crawl Itinerary for {this.props.crawl.name}</h1>
        <div className="ui divided items">{this.renderList()}</div>
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
  { fetchCrawl, fetchLocations }
)(CrawlShow);
