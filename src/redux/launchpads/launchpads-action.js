import {BASE_URL} from "../../api/dataservice";

export const FETCH_LAUNCHPADS_BEGIN   = 'FETCH_LAUNCHPADS_BEGIN';
export const FETCH_LAUNCHPADS_SUCCESS = 'FETCH_LAUNCHPADS_SUCCESS';
export const FETCH_LAUNCHPADS_FAILURE = 'FETCH_LAUNCHPADS_FAILURE';

export const fetchLaunchPadsBegin = () => ({
  type: FETCH_LAUNCHPADS_BEGIN
});

export const fetchLaunchPadsSuccess = launchpads => ({
  type: FETCH_LAUNCHPADS_SUCCESS,
  payload: { launchpads }
});

export const fetchLaunchPadsFailure = error => ({
  type: FETCH_LAUNCHPADS_FAILURE,
  payload: { error }
});

export function fetchLaunchPads() {
    return dispatch => {
      dispatch(fetchLaunchPadsBegin());
      return fetch(`${BASE_URL}launchpads`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchLaunchPadsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchLaunchPadsFailure(error)));
    };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }