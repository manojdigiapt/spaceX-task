import {
  FETCH_LAUNCHPADS_BEGIN, 
  FETCH_LAUNCHPADS_FAILURE, 
  FETCH_LAUNCHPADS_SUCCESS,
 } from './launchpadsdetails-action';
 
 const initialState = {
   loading: false,
   error: null,
   launchpadsDetails: {},
 };
 
 export default function launchpadsReducer(state = initialState, action) {
   switch(action.type) {
     case FETCH_LAUNCHPADS_BEGIN:
       return {
         ...state,
         loading: true,
         error: null
       };
 
     case FETCH_LAUNCHPADS_SUCCESS:
       return {
         ...state,
         loading: false,
         launchpadsDetails: action.payload.launchpadsdetails
       };
 
     case FETCH_LAUNCHPADS_FAILURE:
       return {
         ...state,
         loading: false,
         error: action.payload.error,
         launchpadsDetails: {}
       };
 
     default:
       
       return state;
   }
 }
