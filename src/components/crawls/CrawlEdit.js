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
      return <div className="ui container screen-container">Loading...</div>;
    }
    return (
      <div className="ui container screen-container">
        <div className="ui raised very padded text container segment form-contain">
          <h1 className="ui center aligned header crawl-title">Edit Crawl</h1>
          <CrawlForm
            initialValues={_.pick(this.props.crawl, 'name', 'description', 'start_time')}
            onSubmit={this.onSubmit}
          />
        </div>
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
