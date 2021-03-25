import {
   FETCH_CAPSULES_BEGIN, 
   FETCH_CAPSULES_FAILURE, 
   FETCH_CAPSULES_SUCCESS,
  } from './capsulesdetails-action';
  
  const initialState = {
    loading: false,
    error: null,
    capsuleDetails: {},
  };
  
  export default function capsuleReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_CAPSULES_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_CAPSULES_SUCCESS:
        return {
          ...state,
          loading: false,
          capsuleDetails: action.payload.capsulesdetails
        };
  
      case FETCH_CAPSULES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          capsuleDetails: {}
        };
  
      default:
        
        return state;
    }
  }
