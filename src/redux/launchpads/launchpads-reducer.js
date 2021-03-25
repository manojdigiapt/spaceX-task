import {
  FETCH_LAUNCHPADS_BEGIN, 
  FETCH_LAUNCHPADS_FAILURE, 
  FETCH_LAUNCHPADS_SUCCESS,
 } from './launchpads-action';
 
 const initialState = {
   launchpads: [],
   loading: false,
   error: null,
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
         launchpads: action.payload.launchpads,
       };
 
     case FETCH_LAUNCHPADS_FAILURE:
       return {
         ...state,
         loading: false,
         error: action.payload.error,
         launchpads: [],
       };
 
     default:
       
       return state;
   }
 }
