export const MOCKDATA = {
    START_GAME: {
        game: {
            userName: 'Anish Shrestha',
            size: 4,
            version: "v1",
            gameTime: 3,
            maxWord: 10,
            minWord:3
        }
    },
    GET_GAME_DATA: {
        game: {
            data: 'asdfghjkloiuytre'
        }
    },

    COMPLETE_GAME: {
        game: {
            isComplete: true
        }
    },
    CHECK_WORD: {
        game: {
            words: [
               [
                {
                    word: 'FACE',
                    score: 2
                  }
               ]
              ],
              totalscore:
                parseInt(0) +
                (isNaN(2) ? 0 : parseInt(2)),
              isCorrect: true,
              totalAttepts: 0 + 1,
              correctAttempts:
                0 + (true ? 1 : 0),
              inCorrectAttempts:
                0 + (true ? 0 : 1)
        }
    },
    


}