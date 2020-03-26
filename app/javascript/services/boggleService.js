import { BoggleEndPoints } from "../utils/boggleEndPoints";

export const boggleService = {
  getGameData,
  checkWord,
  startGame
};

function checkWord(version, word) {
   version = "/" + version;
  let param = "?word=" + word;

  return fetch(version + BoggleEndPoints.CheckWord + param)
    .then(response => {
      return response.json();
    })

    .catch(error => {
      return { success: false, message: error };
    });
}

function getGameData(data) {
  let param = "?length=" + data.size;
  const version = "/" + data.version;
  return fetch(version + BoggleEndPoints.GetGameData + param)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return { success: false, message: error };
    });
}

function startGame() {
  return fetch(BoggleEndPoints.StartGame)
    .then(response => {
      return response.json();
    })
    .then(response => {
      if (
        response &&
        response.success &&
        response.data &&
        response.data.board_data
      ) {
        return {
          ...response,
          userName: data.userName,
          size: data.boardSize
        };
      } else {
        return response;
      }
    })
    .catch(error => {
      return { success: false, message: error };
    });
}
