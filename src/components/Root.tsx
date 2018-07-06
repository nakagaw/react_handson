import * as React from "react";

import Title from "./atoms/Title/index";
import Button from "./atoms/Button/index";

export default class Root extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
        <Title>Hello world</Title>
        <Button color="blue">Button</Button>
        <Button color="green">Button</Button>
      </div>
    );
  }
}
