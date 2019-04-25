import React from "react";
import { shallow, mount } from "enzyme";

import Login from "./Login";

const props = {
  email: "",
  password: "",
  name: "",
  surname: "",
  formErrors: { email: "", password: "", authError: "" },
  emailValid: false,
  passwordValid: false,
  showEmailErrorMessage: false,
  showPasswordErrorMessage: false,
  formValid: false
};

it("check submit is disabled with empty inputs", () => {
  const wrapper = shallow(<Login {...props} />);
  expect(wrapper.find("Button").props("disabled")).toBeTruthy();
});

describe("incorrect login input validation", () => {
  describe("check incorrect input text in login and password", () => {
    it("show only email error", () => {
      const incorrectEmail = {
        ...props,
        email: "qweasdzxc",
        password: "12345678",
        formErrors: {
          ...props.formErrors,
          email: "введите корректный адрес"
        },
        showEmailErrorMessage: true
      };
      const wrapper = mount(<Login {...incorrectEmail} />);
      expect(
        wrapper
          .find("p.error-message")
          .at(2)
          .text().length
      ).toEqual(0);
      expect(wrapper.find("div.email-input p").text()).toEqual(
        "введите корректный адрес"
      );
    });
    it("show only password error", () => {
      const incorrectPassword = {
        ...props,
        email: "qweasdzxc@asd.asd",
        password: "123456",
        formErrors: {
          ...props.formErrors,
          password: "слишком короткий пароль"
        },
        showPasswordErrorMessage: true
      };
      const wrapper = mount(<Login {...incorrectPassword} />);
      expect(
        wrapper
          .find("p.error-message")
          .first()
          .text().length
      ).toEqual(0);
      expect(wrapper.find("div.password-input p").text()).toEqual(
        "слишком короткий пароль"
      );
    });

    it("show error message under email and password", () => {
      const incorrectEmailAndPassword = {
        ...props,
        email: "asdsda",
        password: "asdsda",
        formErrors: {
          email: "введите корректный адрес",
          password: "слишком короткий пароль",
          authError: ""
        },
        showEmailErrorMessage: true,
        showPasswordErrorMessage: true
      };
      const wrapper = mount(<Login {...incorrectEmailAndPassword} />);
      expect(wrapper.find("div.email-input p").text()).toEqual(
        "введите корректный адрес"
      );
      expect(wrapper.find("div.password-input p").text()).toEqual(
        "слишком короткий пароль"
      );
    });
  });
});

it("show error message on top when we haven't the same data in lib/apiLogin.js", () => {
  const incorrectData = {
    ...props,
    email: "asdsda@asd.asd",
    password: "asdsdaads",
    formErrors: {
      email: "",
      password: "",
      authError: "неправильный логин или пароль"
    },
    formValid: false
  };
  const wrapper = mount(<Login {...incorrectData} />);
  expect(wrapper.find("div.top-error-message p").text()).toEqual(
    "неправильный логин или пароль"
  );
});
