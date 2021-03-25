import {
    FETCH_HISTORY_BEGIN, 
    FETCH_HISTORY_FAILURE, 
    FETCH_HISTORY_SUCCESS,
   } from './historydetails-actions';
   
   const initialState = {
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
           historyDetails: action.payload.historydetails
         };
   
       case FETCH_HISTORY_FAILURE:
         return {
           ...state,
           loading: false,
           error: action.payload.error,
           historyDetails: {}
         };
   
       default:
         
         return state;
     }
   }
 