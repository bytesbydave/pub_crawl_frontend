import {
  REQUEST_YELP_PENDING,
  REQUEST_YELP_SUCCESS,
  REQUEST_YELP_FAILED
} from '../actions/types';

const initialStateBars = {
  isPending: false,
  bars: [],
  error: ''
};

export default (state = initialStateBars, action = {}) => {
  switch (action.type) {
    case REQUEST_YELP_PENDING:
      return { ...state, isPending: true };
    case REQUEST_YELP_SUCCESS:
      return { ...state, isPending: false, bars: action.payload };
    case REQUEST_YELP_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
