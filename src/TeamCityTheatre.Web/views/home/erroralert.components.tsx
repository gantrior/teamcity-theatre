import {createElement } from "react";

export const ErrorAlert = (props: { error : Error }) => {
  return (
    <div className="alert alert-error">
      <strong>Error!</strong> Can you make sense of this?
      <p>{props.error.name}</p>
      <p>{props.error.message}</p>
      <p>{props.error.stack}</p>
    </div>
  );
};