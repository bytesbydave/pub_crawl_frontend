import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCrawls } from '../../actions';
import dateFormat from 'dateformat';
import './Crawl.css';

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
      const date = new Date(crawl.start_time);
      return (
        <div className="card" key={crawl.id}>
          <Link to={`/crawls/${crawl.id}`} className="image crawl-image">
            <img src={crawl.image} alt="night-out" />
          </Link>
          <div className="content">
            <div className="header">
              <i className="beer icon" />
              <Link to={`/crawls/${crawl.id}`} className="header">
                {crawl.name}
              </Link>
            </div>
            <div className="meta">
              <p>{dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM TT')}</p>
            </div>
            <div className="description">{crawl.description}</div>
          </div>
          <div className="extra content">
            {this.renderAdmin(crawl)}
            <span>
              <i className="user icon" />
              25 People Attending
            </span>
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
        <div className="ui container screen-container">
          <h1 className="ui center aligned header crawl-title">
            List of Pubcrawls
          </h1>
          <div className="ui link cards">{this.renderList()}</div>
          {this.renderCreate()}
        </div>
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
