import {BASE_URL} from "../../../api/dataservice";

export const FETCH_LAUNCHPADS_BEGIN   = 'FETCH_LAUNCHPADS_BEGIN';
export const FETCH_LAUNCHPADS_SUCCESS = 'FETCH_LAUNCHPADS_SUCCESS';
export const FETCH_LAUNCHPADS_FAILURE = 'FETCH_LAUNCHPADS_FAILURE';

export const fetchLaunchPadsBegin = () => ({
  type: FETCH_LAUNCHPADS_BEGIN
});

export const fetchLaunchPadsSuccess = launchpadsdetails => ({
  type: FETCH_LAUNCHPADS_SUCCESS,
  payload: { launchpadsdetails }
});

export const fetchLaunchPadsFailure = error => ({
  type: FETCH_LAUNCHPADS_FAILURE,
  payload: { error }
});

export function fetchDetailsLaunchpads(serialId) {
  return dispatch => {
    dispatch(fetchLaunchPadsBegin());
    return fetch(`${BASE_URL}launchpads/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchLaunchPadsSuccess(json));
        console.log("json",json)
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