import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCrawl, fetchLocations } from '../../actions';

class CrawlShow extends React.Component {
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

  render() {
    if (!this.props.crawl) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.props.crawl.name}</h2>
        <p>{this.props.crawl.description}</p>
        {this.renderList()}
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
