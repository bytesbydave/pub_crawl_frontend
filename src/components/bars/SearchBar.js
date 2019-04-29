import React from 'react';
import { connect } from 'react-redux';
import { requestBars, setSearchField } from '../../actions';

class SearchBar extends React.Component {
  render() {
    const { searchField, onSearchChange, onTermSubmit } = this.props;
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Search for a Bar!</label>
            <input
              type="text"
              value={searchField}
              onChange={onSearchChange}
              required
            />
          </div>
          <button
            onClick={onTermSubmit}
            value={searchField}
            className="ui primary button"
          >
            Search!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchBar.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTermSubmit: event => dispatch(requestBars(event.target.value)),
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
