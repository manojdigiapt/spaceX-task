import {
   FETCH_LAUNCHES_BEGIN, 
   FETCH_LAUNCHES_FAILURE, 
   FETCH_LAUNCHES_SUCCESS,
  } from './launches-action';
  
  const initialState = {
    launches: [],
    loading: false,
    error: null,
    launchesDetails: {},
  };
  
  export default function launchesReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_LAUNCHES_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_LAUNCHES_SUCCESS:
        return {
          ...state,
          loading: false,
          launches: action.payload.launches,
          launchesDetails: action.payload.launches
        };
  
      case FETCH_LAUNCHES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          launches: [],
          launchesDetails: {}
        };
  
      default:
        
        return state;
    }
  }
