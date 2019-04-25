import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";
import Button from "arui-feather/button";
import Input from "arui-feather/input";
import Heading from "arui-feather/heading";

export default class Login extends React.Component {
  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    formErrors: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      authError: PropTypes.string
    }),
    emailValid: PropTypes.bool,
    passwordValid: PropTypes.bool,
    showEmailErrorMessage: PropTypes.bool,
    showPasswordErrorMessage: PropTypes.bool,
    formValid: PropTypes.bool,
    showLoader: PropTypes.bool
  };

  onEmailChange = event => {
    const { setEmailChange, setEmailErrorMessage } = this.props;
    setEmailChange(event);
    this.validation("email", event);
    setEmailErrorMessage(false);
  };

  onPasswordChange = event => {
    const { setPasswordChange, setPasswordErrorMessage } = this.props;
    setPasswordChange(event);
    this.validation("password", event);
    setPasswordErrorMessage(false);
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      emailValid,
      passwordValid,
      email,
      password,
      setEmailErrorMessage,
      setPasswordErrorMessage,
      submitForm
    } = this.props;
    setEmailErrorMessage(!emailValid);
    setPasswordErrorMessage(!passwordValid);
    if (emailValid && passwordValid) {
      submitForm({ email, password });
    }
  };

  validation(fieldName, value) {
    const { setEmailValid, setPasswordValid } = this.props;
    switch (fieldName) {
      case "email":
        if (!!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          setEmailValid(true, "");
        } else {
          setEmailValid(false, "введите корректный адрес");
        }
        break;
      case "password":
        if (value.length >= 8) {
          setPasswordValid(true, "");
        } else {
          setPasswordValid(false, "слишком короткий пароль");
        }
        break;
      default:
        break;
    }
  }

  render() {
    const { email: emailValue, password: passwordValue } = this.props;

    return (
      <div className="login-page">
        <Heading className="login-header" size="l">
          Зайдите на свою страницу
        </Heading>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="top-error-message">
            <ErrorMessage
              errors={this.props.formErrors.authError}
              isIncorrect={!this.props.formValid}
            />
          </div>
          <div className="login-input email-input">
            <Input
              label="Email"
              name="email"
              type="text"
              placeholder="Введите Ваш email"
              value={emailValue}
              onChange={this.onEmailChange}
            />
            <br />
            <ErrorMessage
              errors={this.props.formErrors.email}
              isIncorrect={this.props.showEmailErrorMessage}
            />
          </div>
          <div className="login-input password-input">
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Введите Ваш пароль"
              value={passwordValue}
              onChange={this.onPasswordChange}
            />
            <br />
            <ErrorMessage
              errors={this.props.formErrors.password}
              isIncorrect={this.props.showPasswordErrorMessage}
            />
          </div>

          <Button
            size="m"
            view="extra"
            type="submit"
            disabled={!emailValue || !passwordValue}
          >
            Отправить
          </Button>
        </form>
      </div>
    );
  }
}
