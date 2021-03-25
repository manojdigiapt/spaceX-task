import {
   FETCH_MISSIONS_BEGIN, 
   FETCH_MISSIONS_FAILURE, 
   FETCH_MISSIONS_SUCCESS,
  } from './missionsdetails-action';
  
  const initialState = {
    loading: false,
    error: null,
    missionsDetails: {},
  };
  
  export default function missionsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_MISSIONS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_MISSIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          missionsDetails: action.payload.missionsdetails
        };
  
      case FETCH_MISSIONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          missionsDetails: {}
        };
  
      default:
        
        return state;
    }
  }
