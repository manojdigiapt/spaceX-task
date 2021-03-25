import {
   FETCH_SHIPS_BEGIN, 
   FETCH_SHIPS_FAILURE, 
   FETCH_SHIPS_SUCCESS,
  } from './ships-action';
  
  const initialState = {
    ships: [],
    loading: false,
    error: null,
    shipsDetails: {},
  };
  
  export default function shipsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_SHIPS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_SHIPS_SUCCESS:
        return {
          ...state,
          loading: false,
          ships: action.payload.ships,
          shipsDetails: action.payload.ships
        };
  
      case FETCH_SHIPS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          ships: [],
          shipsDetails: {}
        };
  
      default:
        
        return state;
    }
  }
