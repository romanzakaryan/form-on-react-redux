import React from "react";
import { shallow } from "enzyme";

import { Welcome } from "./Welcome";

it("show correct text on welcome page", () => {
  const props = {
    name: "Роман",
    surname: "Захарян"
  };
  const wrapper = shallow(<Welcome {...props} />);
  expect(wrapper.find("p").length).toEqual(1);
  expect(wrapper.find("p").text()).toEqual(
    "Ну наконец-то ты зашел Роман Захарян"
  );
});
