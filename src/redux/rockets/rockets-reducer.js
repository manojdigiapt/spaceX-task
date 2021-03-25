import {
   FETCH_ROCKETS_BEGIN, 
   FETCH_ROCKETS_FAILURE, 
   FETCH_ROCKETS_SUCCESS,
  } from './rockets-action';
  
  const initialState = {
    rockets: [],
    loading: false,
    error: null,
    rocketsDetails: {},
  };
  
  export default function rocketsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ROCKETS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ROCKETS_SUCCESS:
        return {
          ...state,
          loading: false,
          rockets: action.payload.rockets,
          rocketsDetails: action.payload.rockets
        };
  
      case FETCH_ROCKETS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          rockets: [],
          rocketsDetails: {}
        };
  
      default:
        
        return state;
    }
  }
