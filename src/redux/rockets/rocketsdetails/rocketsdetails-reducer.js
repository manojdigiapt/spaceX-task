import {
    FETCH_ROCKETS_BEGIN, 
    FETCH_ROCKETS_FAILURE, 
    FETCH_ROCKETS_SUCCESS,
   } from './rocketsdetails-action';
   
   const initialState = {
     loading: false,
     error: null,
     rocketsDetails: {},
   };
   
   export default function rocketsReducer(state = initialState, action) {
     switch(action.type) {
       case FETCH_ROCKETS_BEGIN:
         return {
           ...state,
           loading: true,
           error: null
         };
   
       case FETCH_ROCKETS_SUCCESS:
         return {
           ...state,
           loading: false,
           rocketsDetails: action.payload.rocketsdetails
         };
   
       case FETCH_ROCKETS_FAILURE:
         return {
           ...state,
           loading: false,
           error: action.payload.error,
           rocketsDetails: {}
         };
   
       default:
         
         return state;
     }
   }
 