import { GET_THINGS_REQUEST, GET_THINGS_SUCCESS } from "../types";

export const initialState = {};

export function gameReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case GET_THINGS_REQUEST:
      return state;
    case GET_THINGS_SUCCESS:
      return {
        ...state,
        things: action.json.things
      };

    default:
      return state;
  }
}
