import * as React from "react";
// const styles = require("./styles.scss");

interface ImgProps {
  src: string;
  alt: string;
  width?:  string;
  height?: string;
}

const Img = ({ ...props }: ImgProps) => (
  <img { ...props }/>
);

export default Img;