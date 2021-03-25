import {
   FETCH_ROADSTER_BEGIN,
   FETCH_ROADSTER_SUCCESS,
   FETCH_ROADSTER_FAILURE
  } from './roadster-action';
  
  const initialState = {
    roadster: {},
    loading: false,
    error: null,
    companyInfo: {}
  };
  
  export default function roadsterReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ROADSTER_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ROADSTER_SUCCESS:
        return {
          ...state,
          loading: false,
          roadster: action.payload.roadster,
          companyInfo: action.payload.roadster
        };
  
      case FETCH_ROADSTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          roadster: {},
          companyInfo: {}
        };
  
      default:
        
        return state;
    }
  }
