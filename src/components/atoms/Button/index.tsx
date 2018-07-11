import * as React from "react";

interface ButtonProps {
  /** Buttons background color */
  color: "blue" | "green";
  onClick?: React.EventHandler<any>;
}

/** A button with a configurable background color. */
const Button: React.SFC<ButtonProps> = props => (
  <button
    style={{
      padding: 40,
      color: "#eee",
      backgroundColor: props.color,
      fontSize: "2rem",
      borderRadius: "10px"
    }}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;