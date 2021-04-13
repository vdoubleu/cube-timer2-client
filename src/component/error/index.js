import React from "react";

const ErrorMessage = props => {
  const message = props.message;

  return (
    <p> {message} </p>
  );
}

export default ErrorMessage;
