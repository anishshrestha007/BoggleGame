import React from "react";
import DashBoard from "../../game/DashBoard.js";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";

describe("DashBoard Testing", () => {
  let wrapper;
  const clickFn = jest.fn();
  let store;
  beforeEach(() => {
    store = configureStore();
    wrapper = mount(
      <Provider store={store}>
        <DashBoard onClick={clickFn} />
      </Provider>
    );
  });

  test("render the DashBoard component", () => {
    expect(wrapper).toMatchSnapshot;
  });

  test("render Card component", () => {
    expect(wrapper.exists("Card")).toBeTruthy();
  });

  test("render Play component", () => {
    expect(wrapper.exists("#play")).toBeTruthy();
  });

  test("render user input component", () => {
    let userInput = wrapper.find("Input");
    expect(userInput.length).toEqual(1);
  });
});
