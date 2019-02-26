import React from 'react';
import { connect } from 'react-redux';
import { createCrawl } from '../../actions';
import CrawlForm from './CrawlForm';

class CrawlCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createCrawl(formValues);
  };

  render() {
    return (
      <div>
        <h2>Create your own Pub Crawl</h2>
        <CrawlForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createCrawl }
)(CrawlCreate);
