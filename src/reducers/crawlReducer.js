import _ from 'lodash';
import {
  CREATE_CRAWL,
  FETCH_CRAWLS,
  FETCH_CRAWL,
  DELETE_CRAWL,
  EDIT_CRAWL
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CRAWLS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_CRAWL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CRAWL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CRAWL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CRAWL:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
