import {
   FETCH_LAUNCHES_BEGIN, 
   FETCH_LAUNCHES_FAILURE, 
   FETCH_LAUNCHES_SUCCESS,
  } from './launchesdetails-action';
  
  const initialState = {
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
          launchesDetails: action.payload.launchesdetails
        };
  
      case FETCH_LAUNCHES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          launchesDetails: {}
        };
  
      default:
        
        return state;
    }
  }
