import {BASE_URL} from "../../../api/dataservice";

export const FETCH_SHIPSDETAILS_BEGIN   = 'FETCH_SHIPSDETAILS_BEGIN';
export const FETCH_SHIPSDETAILS_SUCCESS = 'FETCH_SHIPSDETAILS_SUCCESS';
export const FETCH_SHIPSDETAILS_FAILURE = 'FETCH_SHIPSDETAILS_FAILURE';

export const fetchShipsDetailsBegin = () => ({
  type: FETCH_SHIPSDETAILS_BEGIN
});

export const fetchShipsDetailsSuccess = shipsdetails => ({
  type: FETCH_SHIPSDETAILS_SUCCESS,
  payload: { shipsdetails }
});

export const fetchShipsDetailsFailure = error => ({
  type: FETCH_SHIPSDETAILS_FAILURE,
  payload: { error }
});

// export function fetchShipsDetails() {
//     return dispatch => {
//       dispatch(fetchShipsDetailsBegin());
//       return fetch(`${BASE_URL}ships`)
//         .then(handleErrors)
//         .then(res => res.json())
//         .then(json => {
//           dispatch(fetchShipsDetailsSuccess(json));
//           return json;
//         })
//         .catch(error => dispatch(fetchShipsDetailsFailure(error)));
//     };
// }

export function fetchDetailsShips(serialId) {
  return dispatch => {
    dispatch(fetchShipsDetailsBegin());
    return fetch(`${BASE_URL}ships/${serialId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchShipsDetailsSuccess(json));
        console.log("json",json)
        return json;
      })
      .catch(error => dispatch(fetchShipsDetailsFailure(error)));
  };
}
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }