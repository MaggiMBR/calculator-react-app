import React from "react";
import "../style-sheets/Button.css";

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };
  return (
    <div
      className={`container-button ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.setClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
