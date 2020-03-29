import { START_GAME, GET_GAME_DATA, CHECK_WORD, COMPLETE_GAME ,RESET_GAME} from "../types";
import { showToast } from "../../components/generics/Toast";
import { boggleService } from "../../services/boggleService";
import _ from "lodash";

export const startGame = (gameInfo, callBack) => {
  return dispatch => {
    boggleService.startGame().then(
      response => {
        if (response) {
          if (response.success) {
            dispatch({
              type: START_GAME,
              game: {
                userName: gameInfo.userName,
                size: gameInfo.size,
                version: response.data.version,
                gameTime: response.data.gameTime,
                maxWord: response.data.maxWord,
                minWord: response.data.minWord
              }
            });
            showToast(
              "success",
              "Welcome " + gameInfo.userName + ", Start playing boggle game!"
            );
            callBack && callBack();
          } else {
            showToast("warning", response.message);
          }
        } else {
          showToast("error", "Server Error !");
        }
      },
      error => {
        showToast("error", "Server Error !");
      }
    );
  };
};
export const getGameData = (gameInfo, callBack) => {
  return dispatch => {
    boggleService.getGameData(gameInfo).then(
      response => {
        if (response) {
          if (response.success) {
            dispatch({
              type: GET_GAME_DATA,
              game: {
                gameData: response.data.game_data
              }
            });
            callBack && callBack(response.data);
          } else {
            showToast("warning", response.message);
          }
        } else {
          showToast("error", "Server Error !");
        }
      },
      error => {
        showToast("error", "Server Error !");
      }
    );
  };
};

export const resetGameData = (reset,callBack) => {
  return dispatch => {
    dispatch({
      type: RESET_GAME,
      game: {
        reset: reset
      }
    });
    callBack && callBack();
  };
};

export const completeGame = (ended, callBack) => {
  return dispatch => {
    dispatch({
      type: COMPLETE_GAME,
      game: {
        isComplete: ended
      }
    });
    callBack && ended && callBack();
  };
};


export const checkWord = (version, word, callBack) => {
  return dispatch => {
    boggleService.checkWord(version, word).then(
      response => {
        if (response) {
          if (response.success) {
            dispatch({
              type: CHECK_WORD,
              game: {
                word: word,
                isCorrect: response.data.is_correct,
                score: response.data.score
              }
            });
            if (response.data.score > 0) {
              showToast(
                "success",
                "Congratulations! You have scored " + response.data.score + " points."
              );
              callBack && callBack(response.data);
            } else {
              showToast("error","Try again! "+    _.capitalize(word)  + " no such word found in the dictionary." );
            }
          } else {
            showToast("warning", response.message);
          }
        } else {
          showToast("error", "Server Error !");
        }
      },
      error => {
        showToast("error", "Server Error !");
      }
    );
  };
};
