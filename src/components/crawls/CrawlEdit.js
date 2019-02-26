import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCrawl, editCrawl } from '../../actions';
import CrawlForm from './CrawlForm';

class CrawlEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCrawl(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editCrawl(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.crawl) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>Edit Crawl</h2>
        <CrawlForm
          initialValues={_.pick(this.props.crawl, 'name', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { crawl: state.crawls[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCrawl, editCrawl }
)(CrawlEdit);
