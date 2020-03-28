import React from "react";
import ScoreBoard from "../../game/ScoreBoard.js";
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
        <ScoreBoard />
      </Provider>
    );
    wrapper.debug();
  });

  test("render the ScoreBoard component", () => {
    expect(wrapper).toMatchSnapshot;
  });

  test("render Score Card component", () => {
    expect(wrapper.exists("#scoreCard")).toBeTruthy();
  });

  test("render Score Table component", () => {
    expect(wrapper.exists("#scoreTable")).toBeTruthy();
  });
});
