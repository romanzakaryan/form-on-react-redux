import React from "react";

const ErrorMessage = props => {
  const error = props.errors;
  const isIncorrect = props.isIncorrect;

  return <p className="error-message">{isIncorrect ? error : ""}</p>;
};

export default ErrorMessage;
