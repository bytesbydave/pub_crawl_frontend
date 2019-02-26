import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCrawls } from '../../actions';

class CrawlList extends React.Component {
  componentDidMount() {
    this.props.fetchCrawls();
  }

  renderAdmin(crawl) {
    if (crawl.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/crawls/edit/${crawl.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/crawls/delete/${crawl.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.crawls.map(crawl => {
      return (
        <div className="crawl" key={crawl.id}>
          {this.renderAdmin(crawl)}
          <i className="beer icon" />
          <div className="content">
            <Link to={`/crawls/${crawl.id}`} className="header">
              {crawl.name}
            </Link>
            <div className="description">{crawl.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/crawls/new" className="ui button primary">
            Create Pub Crawl
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>List of Pubcrawls</h2>
        <div>{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    crawls: Object.values(state.crawls),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchCrawls }
)(CrawlList);
