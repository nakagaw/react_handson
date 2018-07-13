import * as React from "react";
const styles = require("./styles.scss");

interface HeadingProps {
  className?: string;
  level?: number;
  visualLevel?: number;
  children?:  string;
}

const Heading = ({ children, level = 2, visualLevel, className, ...props }: HeadingProps) => {
    level = Math.max(0, Math.min(3, level));
    visualLevel = (visualLevel !== undefined) ? visualLevel : level;
    const Tag = `h${ level }`;
    const tagStyle = `${ styles.heading } ${ styles[`lv${ visualLevel }`] }`;

    return (
      <Tag className={ [ tagStyle, className ].join(' ') } { ...props }>{children}</Tag>
    );
};

export default Heading;