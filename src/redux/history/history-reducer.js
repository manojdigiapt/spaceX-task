import {
    FETCH_HISTORY_BEGIN, 
    FETCH_HISTORY_FAILURE, 
    FETCH_HISTORY_SUCCESS,
   } from './history-actions';
   
   const initialState = {
     history: [],
     loading: false,
     error: null,
     historyDetails: {},
   };
   
   export default function historyReducer(state = initialState, action) {
     switch(action.type) {
       case FETCH_HISTORY_BEGIN:
         return {
           ...state,
           loading: true,
           error: null
         };
   
       case FETCH_HISTORY_SUCCESS:
         return {
           ...state,
           loading: false,
           history: action.payload.data,
           historyDetails: action.payload.history
         };
   
       case FETCH_HISTORY_FAILURE:
         return {
           ...state,
           loading: false,
           error: action.payload.error,
           history: [],
           historyDetails: {}
         };
   
       default:
         
         return state;
     }
   }
 