import { GET_THINGS_REQUEST, GET_THINGS_SUCCESS } from "../types";

export const getThings = () => {
  return dispatch => {
    debugger;
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`v1/game.json`)
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export const getThingsSuccess = json => {
  return {
    type: GET_THINGS_SUCCESS,
    json
  };
};
