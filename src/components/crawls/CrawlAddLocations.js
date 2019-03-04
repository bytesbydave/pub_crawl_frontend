import React from 'react';
import { connect } from 'react-redux';
import { fetchCrawl, fetchLocations, deleteLocation } from '../../actions';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import LocationList from '../locations/LocationList';
import yelp from '../../apis/yelp';

class CrawlAddLocation extends React.Component {
  state = { term: '', locations: [] };

  // componentDidMount() {
  //   this.onTermSubmit('New York');
  // }

  componentDidMount() {
    this.props.fetchCrawl(this.props.match.params.id);
    this.props.fetchLocations(this.props.match.params.id);
  }

  renderList() {
    return this.props.locations.map(location => {
      const id = location.id;
      return (
        <div className="item" key={location.id}>
          <div className="image">
            <button
              onClick={() => this.props.deleteLocation(id)}
              className="ui button negative"
            >
              Delete
            </button>
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

  renderListHeading() {
    if (this.props.locations.length <= 0) {
      return <h2>No Bars on Your List</h2>;
    } else {
      return (
        <div>
          <h2>
            Bars Currently on Your List
            <span className="finished-btn">
              <Link to="/crawls" className="ui primary button">
                Finished
              </Link>
            </span>
          </h2>
        </div>
      );
    }
  }

  onTermSubmit = async term => {
    const response = await yelp.get('/businesses/search', {
      params: {
        term: term,
        location: 'New York City',
        limit: 10,
        categories: 'bars'
      }
    });
    this.setState({ locations: response.data.businesses });
  };

  render() {
    if (!this.props.crawl) {
      return <div className="ui container screen-container">Loading...</div>;
    }
    return (
      <div className="ui container screen-container">
        <h1>Add some bars to {this.props.crawl.name}</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui segnemt">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <LocationList
                locations={this.state.locations}
                crawl={this.props.crawl.id}
                addedLocations={this.props.locations}
              />
            </div>
            <div className="column">
              {this.renderListHeading()}
              <div className="ui divided items">{this.renderList()}</div>
            </div>
          </div>
        </div>
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
)(CrawlAddLocation);
