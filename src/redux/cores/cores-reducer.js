import {
   FETCH_CORES_BEGIN, 
   FETCH_CORES_FAILURE, 
   FETCH_CORES_SUCCESS,
  } from './cores-action';
  
  const initialState = {
    cores: [],
    loading: false,
    error: null,
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
          cores: action.payload.cores,
        };
  
      case FETCH_CORES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          cores: [],
        };
  
      default:
        
        return state;
    }
  }
