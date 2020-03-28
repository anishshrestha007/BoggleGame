import React from "react";
import App from "../App";

import { mount, shallow } from "enzyme";
import GameLogo from "../../../assets/images/GameLogo.png";
describe("Main App Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
 
  });

  test("render the app component", () => {
    expect(wrapper).toMatchSnapshot;
  });

  test("render image component", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("Image").length).toEqual(1);
  });

  test("render SemanticToastContainer component", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("SemanticToastContainer").length).toEqual(1);
  });

  test("render image component src", () => {
    expect(wrapper.find("Image").prop("src")).toEqual(GameLogo);
  });
});
