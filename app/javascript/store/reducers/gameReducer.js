import { START_GAME } from "../types";

export const initialState = {
  gameInfo: {
    userName: "",
    size: 4
  }
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameInfo: action.gameInfo
      };

    default:
      return state;
  }
}
