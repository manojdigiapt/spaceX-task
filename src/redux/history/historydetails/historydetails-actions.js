import {BASE_URL} from "../../../api/dataservice";

export const FETCH_HISTORY_BEGIN   = 'FETCH_HISTORY_BEGIN';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE';

export const fetchHistoryBegin = () => ({
  type: FETCH_HISTORY_BEGIN
});

export const fetchHistorySuccess = historydetails => ({
  type: FETCH_HISTORY_SUCCESS,
  payload: { historydetails }
});

export const fetchHistoryFailure = error => ({
  type: FETCH_HISTORY_FAILURE,
  payload: { error }
});

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
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }