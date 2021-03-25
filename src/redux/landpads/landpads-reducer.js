import {
   FETCH_LANDPADS_BEGIN, 
   FETCH_LANDPADS_FAILURE, 
   FETCH_LANDPADS_SUCCESS,
  } from './landpads-action';
  
  const initialState = {
    landpads: [],
    loading: false,
    error: null,
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
          landpads: action.payload.landpads,
        };
  
      case FETCH_LANDPADS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          landpads: [],
        };
  
      default:
        
        return state;
    }
  }
