import {BASE_URL} from "../../api/dataservice";

export const FETCH_DRAGONS_BEGIN   = 'FETCH_DRAGONS_BEGIN';
export const FETCH_DRAGONS_SUCCESS = 'FETCH_DRAGONS_SUCCESS';
export const FETCH_DRAGONS_FAILURE = 'FETCH_DRAGONS_FAILURE';

export const fetchDragonsBegin = () => ({
  type: FETCH_DRAGONS_BEGIN
});

export const fetchDragonsSuccess = dragons => ({
  type: FETCH_DRAGONS_SUCCESS,
  payload: { dragons }
});

export const fetchDragonsFailure = error => ({
  type: FETCH_DRAGONS_FAILURE,
  payload: { error }
});

export function fetchDragons() {
    return dispatch => {
      dispatch(fetchDragonsBegin());
      return fetch(`${BASE_URL}dragons`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchDragonsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchDragonsFailure(error)));
    };
}

export function fetchDetailsDragons(serialId) {
  return dispatch => {
    dispatch(fetchDragonsBegin());
    return fetch(`${BASE_URL}dragons/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDragonsSuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchDragonsFailure(error)));
  };
}
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }