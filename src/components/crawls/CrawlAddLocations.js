import React from 'react';
import SearchBar from './SearchBar';
import yelp from '../../apis/yelp';

class CrawlAddLocation extends React.Component {
  state = { term: '', gifs: [] };

  // componentDidMount() {
  //   this.onTermSubmit('New York');
  // }

  onTermSubmit = async term => {
    const response = await yelp.get('/businesses/search', {
      params: {
        term: term,
        location: 'New York City',
        limit: 10,
        categories: 'bars'
      }
    });
    console.log(response);
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default CrawlAddLocation;