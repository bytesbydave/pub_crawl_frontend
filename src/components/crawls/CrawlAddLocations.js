import React from 'react';
import { connect } from 'react-redux';
import { fetchCrawl, fetchLocations } from '../../actions';
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
      return (
        <div className="location" key={location.id}>
          <div className="content">
            <Link to={`/locations/${location.id}`} className="header">
              {location.name}
            </Link>
            <div className="description">{location.description}</div>
          </div>
        </div>
      );
    });
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
    this.setState({ locations: response.data.businesses});
  };

  render() {
    if (!this.props.crawl) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {this.renderList()}
        <LocationList locations={this.state.locations} crawl={this.props.crawl.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    crawl: state.crawls[ownProps.match.params.id],
    locations: Object.values(state.locations)
  }
}

export default connect(mapStateToProps, { fetchCrawl, fetchLocations })(CrawlAddLocation);
