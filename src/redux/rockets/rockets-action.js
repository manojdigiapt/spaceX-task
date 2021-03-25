import {BASE_URL} from "../../api/dataservice";

export const FETCH_ROCKETS_BEGIN   = 'FETCH_ROCKETS_BEGIN';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';

export const fetchRocketsBegin = () => ({
  type: FETCH_ROCKETS_BEGIN
});

export const fetchRocketsSuccess = rockets => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: { rockets }
});

export const fetchRocketsFailure = error => ({
  type: FETCH_ROCKETS_FAILURE,
  payload: { error }
});

export function fetchRockets() {
    return dispatch => {
      dispatch(fetchRocketsBegin());
      return fetch(`${BASE_URL}rockets`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchRocketsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchRocketsFailure(error)));
    };
}

// export function fetchDetailsRockets(serialId) {
//   return dispatch => {
//     dispatch(fetchRocketsBegin());
//     return fetch(`${BASE_URL}rockets/${serialId}`)
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchRocketsSuccess(json));
//         console.log("json",json)
//         return json;
//       })
//       .catch(error => dispatch(fetchRocketsFailure(error)));
//   };
// }
  
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }