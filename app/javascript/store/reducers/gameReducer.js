import { START_GAME, GET_GAME_DATA, CHECK_WORD, COMPLETE_GAME } from "../types";

export const initialState = {
  gameInfo: {
    userName: "",
    size: 4,
    data: null,
    version: "v1",
    gameTime: 3,
    words: [],
    isCorrect: false,
    totalscore: 0,
    isComplete: false,
    totalAttepts: 0,
    correctAttempts: 0,
    inCorrectAttempts: 0
  }
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          userName: action.game.userName,
          size: action.game.size,
          version: action.game.version,
          gameTime: action.game.gameTime
        }
      };
    case GET_GAME_DATA:
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          data: action.game.gameData
        }
      };
    case COMPLETE_GAME:
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          isComplete: action.game.isComplete
        }
      };
    case CHECK_WORD:
      return {
        ...state,
        gameInfo: {
          ...state.gameInfo,
          words: [
            ...state.gameInfo.words,
            {
              word: action.game.word,
              score: action.game.score
            }
          ],
          totalscore:
            parseInt(state.gameInfo.totalscore) +
            (isNaN(action.game.score) ? 0 : parseInt(action.game.score)),
          isCorrect: action.game.isCorrect,
          totalAttepts : state.gameInfo.totalAttepts + 1,
          correctAttempts : state.gameInfo.correctAttempts + (action.game.isCorrect  ? 1 : 0),
          inCorrectAttempts : state.gameInfo.inCorrectAttempts + (action.game.isCorrect  ? 0 : 1)
        }
      };

    default:
      return state;
  }
}
