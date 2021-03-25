import {BASE_URL} from "../../../api/dataservice";

export const FETCH_PAYLOADS_BEGIN   = 'FETCH_PAYLOADS_BEGIN';
export const FETCH_PAYLOADS_SUCCESS = 'FETCH_PAYLOADS_SUCCESS';
export const FETCH_PAYLOADS_FAILURE = 'FETCH_PAYLOADS_FAILURE';

export const fetchPayloadsBegin = () => ({
  type: FETCH_PAYLOADS_BEGIN
});

export const fetchPayloadsSuccess = payloadsdetails => ({
  type: FETCH_PAYLOADS_SUCCESS,
  payload: { payloadsdetails }
});

export const fetchPayloadsFailure = error => ({
  type: FETCH_PAYLOADS_FAILURE,
  payload: { error }
});

// export function fetchPayloads() {
//     return dispatch => {
//       dispatch(fetchPayloadsBegin());
//       return fetch(`${BASE_URL}payloads`)
//         .then(handleErrors)
//         .then(res => res.json())
//         .then(json => {
//           dispatch(fetchPayloadsSuccess(json));
//           return json;
//         })
//         .catch(error => dispatch(fetchPayloadsFailure(error)));
//     };
// }

export function fetchDetailsPayloads(serialId) {
  return dispatch => {
    dispatch(fetchPayloadsBegin());
    return fetch(`${BASE_URL}payloads/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPayloadsSuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchPayloadsFailure(error)));
  };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }