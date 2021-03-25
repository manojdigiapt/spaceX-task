import {BASE_URL} from "../../../api/dataservice";

export const FETCH_CAPSULES_BEGIN   = 'FETCH_CAPSULES_BEGIN';
export const FETCH_CAPSULES_SUCCESS = 'FETCH_CAPSULES_SUCCESS';
export const FETCH_CAPSULES_FAILURE = 'FETCH_CAPSULES_FAILURE';

export const fetchCapsulesBegin = () => ({
  type: FETCH_CAPSULES_BEGIN
});

export const fetchCapsulesSuccess = capsulesdetails => ({
  type: FETCH_CAPSULES_SUCCESS,
  payload: { capsulesdetails }
});

export const fetchCapsulesFailure = error => ({
  type: FETCH_CAPSULES_FAILURE,
  payload: { error }
});

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
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }