import {
  EMAIL_INPUT_CHANGE,
  PASSWORD_INPUT_CHANGE,
  EMAIL_VALID,
  PASSWORD_VALID,
  FORM_VALID,
  SHOW_EMAIL_ERROR_MESSAGE,
  SHOW_PASSWORD_ERROR_MESSAGE,
  SHOW_LOADER,
  GET_FULLNAME
} from "./actions";

const defaultState = {
  email: "",
  password: "",
  name: "",
  surname: "",
  formErrors: { email: "", password: "", authError: "" },
  emailValid: false,
  passwordValid: false,
  showEmailErrorMessage: false,
  showPasswordErrorMessage: false,
  formValid: false,
  showLoader: false
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EMAIL_INPUT_CHANGE:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_INPUT_CHANGE:
      return {
        ...state,
        password: action.payload
      };
    case EMAIL_VALID:
      return {
        ...state,
        emailValid: action.payload.emailMatched,
        formErrors: { ...state.formErrors, email: action.payload.errorText }
      };
    case PASSWORD_VALID:
      return {
        ...state,
        passwordValid: action.payload.passwordMatched,
        formErrors: { ...state.formErrors, password: action.payload.errorText }
      };
    case FORM_VALID:
      return {
        ...state,
        formValid: action.payload.value,
        formErrors: { ...state.formErrors, authError: action.payload.errorText }
      };
    case SHOW_EMAIL_ERROR_MESSAGE:
      return {
        ...state,
        showEmailErrorMessage: action.payload
      };
    case SHOW_PASSWORD_ERROR_MESSAGE:
      return {
        ...state,
        showPasswordErrorMessage: action.payload
      };
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: action.payload
      };
    case GET_FULLNAME:
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname
      };
  }

  return state;
};
