import {
   FETCH_DRAGONS_BEGIN, 
   FETCH_DRAGONS_FAILURE, 
   FETCH_DRAGONS_SUCCESS,
  } from './dragons-action';
  
  const initialState = {
    dragons: [],
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
          dragons: action.payload.dragons,
          dragonsDetails: action.payload.dragons
        };
  
      case FETCH_DRAGONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          dragons: [],
          dragonsDetails: {}
        };
  
      default:
        return state;
    }
  }
