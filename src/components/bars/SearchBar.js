import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search for a Bar!</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              required
            />
          </div>
          <button className="ui primary button">Search!</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
