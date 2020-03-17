import { START_GAME } from "../types";

export const startGame = (gameInfo, callBack) => {
  callBack && callBack();
  return dispatch => {
    dispatch({ type: START_GAME, gameInfo });
  };
};
