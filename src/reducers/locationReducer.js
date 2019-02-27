import _ from 'lodash';
import {
  CREATE_LOCATION,
  FETCH_LOCATIONS,
  FETCH_LOCATION,
  DELETE_LOCATION
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      state = {}
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_LOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_LOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_LOCATION:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
