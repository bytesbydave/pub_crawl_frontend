import streams from '../apis/streams';
import crawls from '../apis/crawls';
import locations from '../apis/locations';
import yelp from '../apis/yelp';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  CREATE_CRAWL,
  FETCH_CRAWLS,
  FETCH_CRAWL,
  DELETE_CRAWL,
  EDIT_CRAWL,
  CREATE_LOCATION,
  FETCH_LOCATIONS,
  FETCH_LOCATION,
  DELETE_LOCATION,
  CHANGE_SEARCH_FIELD,
  REQUEST_YELP_PENDING,
  REQUEST_YELP_SUCCESS,
  REQUEST_YELP_FAILED
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestBars = term => async dispatch => {
  dispatch({ type: REQUEST_YELP_PENDING });
  try {
    const response = await yelp.get('/businesses/search', {
      params: {
        term: term,
        location: 'New York City',
        limit: 10,
        categories: 'bars'
      }
    });
    dispatch({ type: REQUEST_YELP_SUCCESS, payload: response.data.businesses });
  } catch (err) {
    dispatch({ type: REQUEST_YELP_FAILED, payload: err });
  }
};

export const fetchLocations = id => async dispatch => {
  const response = await crawls.get(`/crawls/${id}/locations`);

  dispatch({ type: FETCH_LOCATIONS, payload: response.data });
};

export const fetchLocation = id => async dispatch => {
  const response = await locations.get(`/locations/${id}`);

  dispatch({ type: FETCH_LOCATION, payload: response.data });
};

export const createLocation = (id, formValues) => async dispatch => {
  try {
    const location = {
      ...formValues,
      crawl_id: id,
      website: formValues.url,
      yelp_id: formValues.id,
      address: formValues.location.address1,
      city: formValues.location.city,
      category: formValues.categories[0].title
    };
    const response = await locations.post('/locations', { location });
    dispatch({ type: CREATE_LOCATION, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocation = id => async dispatch => {
  await locations.delete(`/locations/${id}`);

  dispatch({ type: DELETE_LOCATION, payload: id });
};

export const fetchCrawls = () => async dispatch => {
  const response = await crawls.get('/crawls');

  dispatch({ type: FETCH_CRAWLS, payload: response.data });
};

export const fetchCrawl = id => async dispatch => {
  const response = await crawls.get(`/crawls/${id}`);

  dispatch({ type: FETCH_CRAWL, payload: response.data });
};

export const createCrawl = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await crawls.post('/crawls', { ...formValues, userId });
  const id = response.data.id;

  dispatch({ type: CREATE_CRAWL, payload: response.data });
  history.push(`/crawls/${id}/`);
};

export const editCrawl = (id, formValues) => async dispatch => {
  const response = await crawls.patch(`/crawls/${id}`, formValues);

  dispatch({ type: EDIT_CRAWL, payload: response.data });
  history.push(`/crawls/${id}/`);
};

export const deleteCrawl = id => async dispatch => {
  await crawls.delete(`/crawls/${id}`);

  dispatch({ type: DELETE_CRAWL, payload: id });
  history.push('/crawls');
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/'); //directs the user to the homepage afterwards
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};
