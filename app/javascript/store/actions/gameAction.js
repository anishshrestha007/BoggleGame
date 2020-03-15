import { GET_THINGS_REQUEST, GET_THINGS_SUCCESS } from "../types";
export const gameAction = {
  getThings,
  getThingsSuccess
};

function getThings() {
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`v1/things.json`)
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  };
}

function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json
  };
}
