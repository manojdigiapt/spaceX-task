import {BASE_URL} from "../../../api/dataservice";

export const FETCH_LAUNCHES_BEGIN   = 'FETCH_LAUNCHES_BEGIN';
export const FETCH_LAUNCHES_SUCCESS = 'FETCH_LAUNCHES_SUCCESS';
export const FETCH_LAUNCHES_FAILURE = 'FETCH_LAUNCHES_FAILURE';

export const fetchLaunchesBegin = () => ({
  type: FETCH_LAUNCHES_BEGIN
});

export const fetchLaunchesSuccess = launchesdetails => ({
  type: FETCH_LAUNCHES_SUCCESS,
  payload: { launchesdetails }
});

export const fetchLaunchesFailure = error => ({
  type: FETCH_LAUNCHES_FAILURE,
  payload: { error }
});


export function fetchDetailsLaunches(serialId) {
  return dispatch => {
    dispatch(fetchLaunchesBegin());
    return fetch(`${BASE_URL}launches/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchLaunchesSuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchLaunchesFailure(error)));
  };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }