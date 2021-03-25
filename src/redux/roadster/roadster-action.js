import {BASE_URL} from "../../api/dataservice";

export const FETCH_ROADSTER_BEGIN   = 'FETCH_ROADSTER_BEGIN';
export const FETCH_ROADSTER_SUCCESS = 'FETCH_ROADSTER_SUCCESS';
export const FETCH_ROADSTER_FAILURE = 'FETCH_ROADSTER_FAILURE';

export const fetchRoadsterBegin = () => ({
  type: FETCH_ROADSTER_BEGIN
});

export const fetchRoadsterSuccess = roadster => ({
  type: FETCH_ROADSTER_SUCCESS,
  payload: { roadster }
});

export const fetchRoadsterFailure = error => ({
  type: FETCH_ROADSTER_FAILURE,
  payload: { error }
});

export function fetchRoadster() {
    return dispatch => {
      dispatch(fetchRoadsterBegin());
      return fetch(`${BASE_URL}roadster`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchRoadsterSuccess(json));
          console.log("json",json)
          return json;
        })
        .catch(error => dispatch(fetchRoadsterFailure(error)));
    };
}

export function fetchCompanyInfo() {
  return dispatch => {
    dispatch(fetchRoadsterBegin());
    return fetch(`${BASE_URL}info`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchRoadsterSuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchRoadsterFailure(error)));
  };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }