import crawlReducer from '../crawlReducer';
import { CREATE_CRAWL, FETCH_CRAWLS, FETCH_CRAWL, DELETE_CRAWL, EDIT_CRAWL } from '../../actions/types';

describe('crawl reducer', () => {
  it('should return the initial state', () => {
    expect(crawlReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_CRAWL', () => {
    const startAction = {
      type: FETCH_CRAWLS,
      payload: {}
    };
    expect(crawlReducer({}, startAction)).toEqual({});
  });

  it('should handle FETCH_CRAWL', () => {
    const successAction = {
      type: FETCH_CRAWL,
      payload: {id: 4, name: "crawl name", description: "this is a description", userId: "1"}, // important to pass correct payload, that's what the tests are for ;)
    };
    expect(crawlReducer({}, successAction)).toEqual({"4": {"description": "this is a description", "id": 4, "name": "crawl name", "userId": "1"}});
  });

  it('should handle CREATE_CRAWL', () => {
    const updateAction = {
      type: CREATE_CRAWL,
      payload: {id: 2, name: "crawl name", description: "this is a description", userId: "1" },
    };
    expect(crawlReducer({}, updateAction)).toEqual({"2": {id: 2, name: "crawl name", description: "this is a description", userId: "1" }});
  });
});