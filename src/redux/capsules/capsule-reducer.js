import {
   FETCH_CAPSULES_BEGIN, 
   FETCH_CAPSULES_FAILURE, 
   FETCH_CAPSULES_SUCCESS,
  } from './capsule-action';
  
  const initialState = {
    capsules: [],
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
          capsules: action.payload.capsules,
          capsuleDetails: action.payload.capsules
        };
  
      case FETCH_CAPSULES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          capsules: [],
          capsuleDetails: {}
        };
  
      default:
        
        return state;
    }
  }
