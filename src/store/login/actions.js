export const EMAIL_INPUT_CHANGE = "EMAIL_INPUT_CHANGE";
export const PASSWORD_INPUT_CHANGE = "PASSWORD_INPUT_CHANGE";
export const EMAIL_VALID = "EMAIL_VALID";
export const PASSWORD_VALID = "PASSWORD_VALID";
export const FORM_VALID = "FORM_VALID";
export const SHOW_EMAIL_ERROR_MESSAGE = "SHOW_EMAIL_ERROR_MESSAGE";
export const SHOW_PASSWORD_ERROR_MESSAGE = "SHOW_PASSWORD_ERROR_MESSAGE";
export const SHOW_LOADER = "SHOW_LOADER";
export const GET_FULLNAME = "GET_FULLNAME";

export const setEmailChange = email => ({
  type: EMAIL_INPUT_CHANGE,
  payload: email
});

export const setPasswordChange = password => ({
  type: PASSWORD_INPUT_CHANGE,
  payload: password
});

export const setEmailValid = (emailMatched, errorText) => ({
  type: EMAIL_VALID,
  payload: { emailMatched, errorText }
});

export const setPasswordValid = (passwordMatched, errorText) => ({
  type: PASSWORD_VALID,
  payload: { passwordMatched, errorText }
});

export const setFormValid = (value, errorText = "") => ({
  type: FORM_VALID,
  payload: { value, errorText }
});

export const setEmailErrorMessage = value => ({
  type: SHOW_EMAIL_ERROR_MESSAGE,
  payload: value
});

export const setPasswordErrorMessage = value => ({
  type: SHOW_PASSWORD_ERROR_MESSAGE,
  payload: value
});

export const setLoader = value => ({
  type: SHOW_LOADER,
  payload: value
});

export const getFullName = (name = "", surname = "") => ({
  type: GET_FULLNAME,
  payload: { name, surname }
});
