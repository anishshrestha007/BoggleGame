import { GET_THINGS_REQUEST, GET_THINGS_SUCCESS } from "../types";
import config from "../../constants/config";

import { getCurrentUser } from "../../helpers";

export const initialState = {};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THINGS_REQUEST:
      return { ...state, inGame: true, currentUser: action.user, errMsg: [] };
    case GET_THINGS_SUCCESS:
      return { ...state, inGame: true, currentUser: action.user, errMsg: [] };

    default:
      return state;
  }
};

export default gameReducer;
