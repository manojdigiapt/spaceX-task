import {
   FETCH_MISSIONS_BEGIN, 
   FETCH_MISSIONS_FAILURE, 
   FETCH_MISSIONS_SUCCESS,
  } from './missions-action';
  
  const initialState = {
    missions: [],
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
          missions: action.payload.missions,
          missionsDetails: action.payload.missions
        };
  
      case FETCH_MISSIONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          missions: [],
          missionsDetails: {}
        };
  
      default:
        
        return state;
    }
  }
