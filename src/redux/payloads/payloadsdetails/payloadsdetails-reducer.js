import {
  FETCH_PAYLOADS_BEGIN, 
  FETCH_PAYLOADS_FAILURE, 
  FETCH_PAYLOADS_SUCCESS,
 } from './payloadsdetails-action';
 
 const initialState = {
   loading: false,
   error: null,
   payloadsDetails: {},
 };
 
 export default function payloadsReducer(state = initialState, action) {
   switch(action.type) {
     case FETCH_PAYLOADS_BEGIN:
       return {
         ...state,
         loading: true,
         error: null
       };
 
     case FETCH_PAYLOADS_SUCCESS:
       return {
         ...state,
         loading: false,
         payloadsDetails: action.payload.payloadsdetails
       };
 
     case FETCH_PAYLOADS_FAILURE:
       return {
         ...state,
         loading: false,
         error: action.payload.error,
         payloadsDetails: {}
       };
 
     default:
       
       return state;
   }
 }
