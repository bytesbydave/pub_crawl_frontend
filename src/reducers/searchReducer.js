import { CHANGE_SEARCH_FIELD } from '../actions/types';

const initialStateSearch = {
  searchField: ''
};

export default (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
