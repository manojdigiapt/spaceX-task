import {
   FETCH_DRAGONS_BEGIN, 
   FETCH_DRAGONS_FAILURE, 
   FETCH_DRAGONS_SUCCESS,
  } from './dragonsdetails-action';
  
  const initialState = {
    loading: false,
    error: null,
    dragonsDetails: {},
  };
  
  export default function dragonsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_DRAGONS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_DRAGONS_SUCCESS:
        return {
          ...state,
          loading: false,
          dragonsDetails: action.payload.dragonsdetails
        };
  
      case FETCH_DRAGONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          dragonsDetails: {}
        };
  
      default:
        return state;
    }
  }
