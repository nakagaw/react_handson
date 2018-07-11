import * as React from "react";

import Title from "./atoms/Title/index";
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
        <Title>Hello world</Title>
        <Balloon>削除する</Balloon>
        <Img src={imageFile} alt="踊るメガネ女子" width="417" height="347" />
        <Button color="blue">Button</Button>
        <Button color="green">Button</Button>
      </div>
    );
  }
}
