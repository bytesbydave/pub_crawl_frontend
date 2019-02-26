import React from 'react';
import { connect } from 'react-redux';
import { fetchCrawl } from '../../actions';

class CrawlShow extends React.Component {
  componentDidMount() {
    this.props.fetchCrawl(this.props.match.params.id);
  }

  render() {
    if (!this.props.crawl) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.props.crawl.name}</h2>
        <p>{this.props.crawl.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { crawl: state.crawls[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCrawl }
)(CrawlShow);
