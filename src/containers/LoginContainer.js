import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import Login from "./../components/Login";
import Loader from "./../components/Loader";
import {
  setEmailChange,
  setPasswordChange,
  setEmailValid,
  setPasswordValid,
  setFormValid,
  setEmailErrorMessage,
  setPasswordErrorMessage,
  setLoader,
  getFullName
} from "./../store/login/actions";
import { api } from "../lib/apiLogin";
class LoginContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.showLoader !== prevProps.showLoader &&
      !this.props.showLoader &&
      this.props.formValid
    ) {
      this.props.history.push("/welcome");
    }
  }
  render() {
    if (this.props.showLoader) {
      return <Loader />;
    }
    return (
      <Login
        email={this.props.email}
        password={this.props.password}
        name={this.props.name}
        surname={this.props.surname}
        formErrors={this.props.formErrors}
        emailValid={this.props.emailValid}
        passwordValid={this.props.passwordValid}
        formValid={this.props.formValid}
        showLoader={this.props.showLoader}
        showEmailErrorMessage={this.props.showEmailErrorMessage}
        showPasswordErrorMessage={this.props.showPasswordErrorMessage}
        setEmailChange={this.props.setEmailChange}
        setPasswordChange={this.props.setPasswordChange}
        setEmailValid={this.props.setEmailValid}
        setPasswordValid={this.props.setPasswordValid}
        setFormValid={this.props.setFormValid}
        setEmailErrorMessage={this.props.setEmailErrorMessage}
        setPasswordErrorMessage={this.props.setPasswordErrorMessage}
        submitForm={this.props.submitForm}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    name: state.login.name,
    surname: state.login.surname,
    formErrors: state.login.formErrors,
    emailValid: state.login.emailValid,
    passwordValid: state.login.passwordValid,
    formValid: state.login.formValid,
    showEmailErrorMessage: state.login.showEmailErrorMessage,
    showPasswordErrorMessage: state.login.showPasswordErrorMessage,
    showLoader: state.login.showLoader
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setEmailChange,
      setPasswordChange,
      setEmailValid,
      setPasswordValid,
      setFormValid,
      setEmailErrorMessage,
      setPasswordErrorMessage,
      submitForm: async function(data) {
        dispatch(setLoader(true));
        const response = await api.login(data);
        if (!response) {
          dispatch(setFormValid(false, "неправильный логин или пароль"));
        } else {
          dispatch(setFormValid(true));
          dispatch(getFullName(response.name, response.surname));
        }
        dispatch(setLoader(false));
      }
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginContainer)
);
