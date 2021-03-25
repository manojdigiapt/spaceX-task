import {BASE_URL} from "../../api/dataservice";

export const FETCH_SHIPS_BEGIN   = 'FETCH_SHIPS_BEGIN';
export const FETCH_SHIPS_SUCCESS = 'FETCH_SHIPS_SUCCESS';
export const FETCH_SHIPS_FAILURE = 'FETCH_SHIPS_FAILURE';

export const fetchShipsBegin = () => ({
  type: FETCH_SHIPS_BEGIN
});

export const fetchShipsSuccess = ships => ({
  type: FETCH_SHIPS_SUCCESS,
  payload: { ships }
});

export const fetchShipsFailure = error => ({
  type: FETCH_SHIPS_FAILURE,
  payload: { error }
});

export function fetchShips() {
    return dispatch => {
      dispatch(fetchShipsBegin());
      return fetch(`${BASE_URL}ships`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchShipsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchShipsFailure(error)));
    };
}

export function fetchDetailsShips(serialId) {
  return dispatch => {
    dispatch(fetchShipsBegin());
    return fetch(`${BASE_URL}ships/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchShipsSuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchShipsFailure(error)));
  };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }