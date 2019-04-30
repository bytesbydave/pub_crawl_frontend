import React from 'react';
import SearchBar from '../bars/SearchBar';
import BarsList from '../bars/BarsList';
import 'semantic-ui-css/semantic.min.css';

class BarsDisplay extends React.Component {
  render() {
    return (
      <div className="ui container screen-container">
        <SearchBar />
        <BarsList crawl={this.props.crawl} />
      </div>
    );
  }
}

export default BarsDisplay;
