import React from 'react';
import BarItem from './BarItem';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

class BarList extends React.Component {
  renderBarList(crawl, locations) {
    const crawlId = crawl.id;
    const locationIds = locations.map(location => location.yelp_id);
    const bars = [];
    for (let bar of this.props.bars) {
      if (!locationIds.includes(bar.id)) {
        bars.push(bar);
      }
    }
    if (this.props.error) {
      return <div>Error</div>;
    }
    if (this.props.isPending) {
      return <div>Loading</div>;
    } else {
      return bars.map(bar => {
        return (
          <BarItem
            bar={bar}
            key={bar.id}
            picture={bar.imageUrl}
            crawl={crawlId}
          />
        );
      });
    }
  }
  render() {
    return (
      <div className="ui link cards">
        {this.renderBarList(this.props.crawl, this.props.locations)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bars: state.requestBars.bars,
    isPending: state.requestBars.isPending,
    error: state.requestBars.error
  };
};

export default connect(mapStateToProps)(BarList);
