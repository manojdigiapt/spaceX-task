import {
   FETCH_LANDPADS_BEGIN, 
   FETCH_LANDPADS_FAILURE, 
   FETCH_LANDPADS_SUCCESS,
  } from './landpadsdetails-action';
  
  const initialState = {
    loading: false,
    error: null,
    landpadsDetails: {},
  };
  
  export default function landpadsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_LANDPADS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_LANDPADS_SUCCESS:
        return {
          ...state,
          loading: false,
          landpadsDetails: action.payload.landpadsdetails
        };
  
      case FETCH_LANDPADS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          landpadsDetails: {}
        };
  
      default:
        
        return state;
    }
  }
