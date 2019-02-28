import locationReducer from '../locationReducer';
import { CREATE_LOCATION, FETCH_LOCATIONS, FETCH_LOCATION, DELETE_LOCATION, EDIT_LOCATION } from '../../actions/types';

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(locationReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_LOCATION', () => {
    const startAction = {
      type: FETCH_LOCATIONS,
      payload: {}
    };
    expect(locationReducer({}, startAction)).toEqual({});
  });

  // it('should handle FETCH_LOCATION', () => {
  //   const successAction = {
  //     type: FETCH_LOCATION,
  //     payload: {id: 4, name: "LOCATION name", description: "this is a description", userId: "1"}, // important to pass correct payload, that's what the tests are for ;)
  //   };
  //   expect(locationReducer({}, successAction)).toEqual({"4": {"description": "this is a description", "id": 4, "name": "LOCATION name", "userId": "1"}});
  // });

  // it('should handle CREATE_LOCATION', () => {
  //   const updateAction = {
  //     type: CREATE_LOCATION,
  //     payload: {id: 2, name: "LOCATION name", description: "this is a description", userId: "1" },
  //   };
  //   expect(locationReducer({}, updateAction)).toEqual({"2": {id: 2, name: "LOCATION name", description: "this is a description", userId: "1" }});
  // });
});