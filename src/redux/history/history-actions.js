import {BASE_URL} from "../../api/dataservice";

export const FETCH_HISTORY_BEGIN   = 'FETCH_HISTORY_BEGIN';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE';

export const fetchHistoryBegin = () => ({
  type: FETCH_HISTORY_BEGIN
});

export const fetchHistorySuccess = data => ({
  type: FETCH_HISTORY_SUCCESS,
  payload: { data }
});

export const fetchHistoryFailure = error => ({
  type: FETCH_HISTORY_FAILURE,
  payload: { error }
});

export function fetchHistory() {
    return dispatch => {
      dispatch(fetchHistoryBegin());
      return fetch(`${BASE_URL}history`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchHistorySuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchHistoryFailure(error)));
    };
}

export function fetchDetailsHistory(serialId) {
  return dispatch => {
    dispatch(fetchHistoryBegin());
    return fetch(`${BASE_URL}history/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchHistorySuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchHistoryFailure(error)));
  };
}
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }