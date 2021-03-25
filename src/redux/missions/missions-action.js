import {BASE_URL} from "../../api/dataservice";

export const FETCH_MISSIONS_BEGIN   = 'FETCH_MISSIONS_BEGIN';
export const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
export const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';

export const fetchMissionsBegin = () => ({
  type: FETCH_MISSIONS_BEGIN
});

export const fetchMissionsSuccess = missions => ({
  type: FETCH_MISSIONS_SUCCESS,
  payload: { missions }
});

export const fetchMissionsFailure = error => ({
  type: FETCH_MISSIONS_FAILURE,
  payload: { error }
});

export function fetchMissions() {
    return dispatch => {
      dispatch(fetchMissionsBegin());
      return fetch(`${BASE_URL}missions`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchMissionsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchMissionsFailure(error)));
    };
}

  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }