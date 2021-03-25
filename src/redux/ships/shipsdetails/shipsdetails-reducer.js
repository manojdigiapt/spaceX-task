import {
   FETCH_SHIPSDETAILS_BEGIN, 
   FETCH_SHIPSDETAILS_FAILURE, 
   FETCH_SHIPSDETAILS_SUCCESS,
  } from './shipsdetails-action';
  
  const initialState = {
    // ships: [],
    loading: false,
    error: null,
    shipsDetails: {},
  };
  
  export default function shipsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_SHIPSDETAILS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_SHIPSDETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          // ships: action.payload.ships,
          shipsDetails: action.payload.shipsdetails
        };
  
      case FETCH_SHIPSDETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          // ships: [],
          shipsDetails: {}
        };
  
      default:
        
        return state;
    }
  }
