import React from 'react';
import { connect } from 'react-redux';
import { createCrawl } from '../../actions';
import CrawlForm from './CrawlForm';
import './Crawl.css';

class CrawlCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createCrawl(formValues);
  };

  render() {
    return (
      <div className="ui container screen-container">
        <div className="ui raised very padded text container segment form-contain">
          <h1 className="ui center aligned header crawl-title">
            Create your own Pub Crawl
          </h1>
          <CrawlForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createCrawl }
)(CrawlCreate);
