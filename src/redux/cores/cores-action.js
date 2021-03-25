import {BASE_URL} from "../../api/dataservice";

export const FETCH_CORES_BEGIN   = 'FETCH_CORES_BEGIN';
export const FETCH_CORES_SUCCESS = 'FETCH_CORES_SUCCESS';
export const FETCH_CORES_FAILURE = 'FETCH_CORES_FAILURE';

export const fetchCoresBegin = () => ({
  type: FETCH_CORES_BEGIN
});

export const fetchCoresSuccess = cores => ({
  type: FETCH_CORES_SUCCESS,
  payload: { cores }
});

export const fetchCoresFailure = error => ({
  type: FETCH_CORES_FAILURE,
  payload: { error }
});

export function fetchCores() {
    return dispatch => {
      dispatch(fetchCoresBegin());
      return fetch(`${BASE_URL}cores`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCoresSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchCoresFailure(error)));
    };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }