import {gameReducer,initialState} from "../../../store/reducers/gameReducer";

import * as types from "../../../store/types";
import { MOCKDATA } from "../../__mocks__/boggleMock";

describe("Boggle reducer test", () => {
  test("should handle start game request", () => {
    expect(
        gameReducer(initialState, {
        type: types.START_GAME,
        game: MOCKDATA.START_GAME.game
      })
    ).toMatchSnapshot();
  });

  test("should handle get game data request", () => {
    expect(
        gameReducer(initialState, {
        type: types.GET_GAME_DATA,
        game: MOCKDATA.GET_GAME_DATA.game
      })
    ).toMatchSnapshot();
  });

  it("should handle check word request", () => {
    expect(
        gameReducer(initialState, {
        type: types.CHECK_WORD,
        game: MOCKDATA.CHECK_WORD.game
      })
    ).toMatchSnapshot();
  });

  it("should handle game complete request", () => {
    expect(
        gameReducer(initialState, {
        type: types.COMPLETE_GAME,
        game: MOCKDATA.COMPLETE_GAME.game
      })
    ).toMatchSnapshot();
  });
});
