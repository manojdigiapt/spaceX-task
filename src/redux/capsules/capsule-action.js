import {BASE_URL} from "../../api/dataservice";

export const FETCH_CAPSULES_BEGIN   = 'FETCH_CAPSULES_BEGIN';
export const FETCH_CAPSULES_SUCCESS = 'FETCH_CAPSULES_SUCCESS';
export const FETCH_CAPSULES_FAILURE = 'FETCH_CAPSULES_FAILURE';

export const fetchCapsulesBegin = () => ({
  type: FETCH_CAPSULES_BEGIN
});

export const fetchCapsulesSuccess = capsules => ({
  type: FETCH_CAPSULES_SUCCESS,
  payload: { capsules }
});

export const fetchCapsulesFailure = error => ({
  type: FETCH_CAPSULES_FAILURE,
  payload: { error }
});

export function fetchCapsules() {
    return dispatch => {
      dispatch(fetchCapsulesBegin());
      return fetch(`${BASE_URL}capsules`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCapsulesSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchCapsulesFailure(error)));
    };
}

export function fetchDetailsCapsules(serialId) {
  return dispatch => {
    dispatch(fetchCapsulesBegin());
    return fetch(`${BASE_URL}capsules/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCapsulesSuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchCapsulesFailure(error)));
  };
}
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }