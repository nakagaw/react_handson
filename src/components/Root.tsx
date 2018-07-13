import * as React from "react";

import Heading from "./atoms/Heading/index";
import Button from "./atoms/Button/index";
import Img from "./atoms/Img/index";
import Balloon from "./atoms/Balloon/index";

const imageFile = require("../images/1.gif");

export default class Root extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
        <Heading>Hello world</Heading>
        <Balloon>Delete</Balloon>
        <Img src={imageFile} alt="Dancing girl wearing Eyeglasses" width="417" height="347" />
        <Button color="blue">Button</Button>
        <Button color="green">Button</Button>
      </div>
    );
  }
}
