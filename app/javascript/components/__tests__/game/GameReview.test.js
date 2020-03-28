import React from "react";
import GameReview from "../../game/GameReview.js";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";

describe("Game Review Testing", () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = configureStore();
    wrapper = mount(
      <Provider store={store}>
        <GameReview />
      </Provider>
    );
  });

  test("render the GameReview component", () => {
    expect(wrapper).toMatchSnapshot;
  });

  test("render ScoreBoard component", () => {
    expect(wrapper.exists("ScoreBoard")).toBeTruthy();
  });
});
