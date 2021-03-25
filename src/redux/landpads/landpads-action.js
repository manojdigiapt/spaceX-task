import {BASE_URL} from "../../api/dataservice";

export const FETCH_LANDPADS_BEGIN   = 'FETCH_LANDPADS_BEGIN';
export const FETCH_LANDPADS_SUCCESS = 'FETCH_LANDPADS_SUCCESS';
export const FETCH_LANDPADS_FAILURE = 'FETCH_LANDPADS_FAILURE';

export const fetchLandPadsBegin = () => ({
  type: FETCH_LANDPADS_BEGIN
});

export const fetchLandPadsSuccess = landpads => ({
  type: FETCH_LANDPADS_SUCCESS,
  payload: { landpads }
});

export const fetchLandPadsFailure = error => ({
  type: FETCH_LANDPADS_FAILURE,
  payload: { error }
});

export function fetchLandPads() {
    return dispatch => {
      dispatch(fetchLandPadsBegin());
      return fetch(`${BASE_URL}landpads`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchLandPadsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchLandPadsFailure(error)));
    };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }