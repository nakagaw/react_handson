import * as React from "react";
const styles = require("./styles.scss");

interface BalloonProps {
  className?: string;
  children?:  string;
  style?: React.CSSProperties;
}

const Balloon = ({ children, className, ...props }: BalloonProps) => (
  <span className={ [ styles.balloon, className ].join(' ') } { ...props }>{children}</span>
);

export default Balloon;