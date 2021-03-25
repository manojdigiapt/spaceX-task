import {
   FETCH_CORES_BEGIN, 
   FETCH_CORES_FAILURE, 
   FETCH_CORES_SUCCESS,
  } from './coresdetails-action';
  
  const initialState = {
    loading: false,
    error: null,
    coresDetails: {},
  };
  
  export default function coresReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_CORES_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_CORES_SUCCESS:
        return {
          ...state,
          loading: false,
          coresDetails: action.payload.coresdetails
        };
  
      case FETCH_CORES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          coresDetails: {}
        };
  
      default:
        
        return state;
    }
  }
