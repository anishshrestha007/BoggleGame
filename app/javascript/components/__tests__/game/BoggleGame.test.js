import React from "react";
import BoggleGame from "../../game/BoggleGame.js";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";

describe("Game BoggleGame Testing", () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = configureStore();
    wrapper = mount(
      <Provider store={store}>
        <BoggleGame />
      </Provider>
    );
  });

  test("render the BoggleGame component", () => {
    expect(wrapper).toMatchSnapshot;
  });
});
