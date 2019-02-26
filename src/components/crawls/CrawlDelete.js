import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchCrawl, deleteCrawl } from '../../actions';

class CrawlDelete extends React.Component {
  componentDidMount() {
    this.props.fetchCrawl(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteCrawl(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.crawl) {
      return 'Are you sure you want to delete this crawl?';
    }
    return `Are you sure you wnat to delete the crawl with name: ${
      this.props.crawl.name
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Crawl"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { crawl: state.crawls[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCrawl, deleteCrawl }
)(CrawlDelete);
