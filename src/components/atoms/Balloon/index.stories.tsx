import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Balloon from "./index";

const stories = storiesOf("Atoms / Balloon", module);

stories
  .add("Default", withInfo({ inline: true })(() =>
      <Balloon>Delete</Balloon>
  ))
  .add("Free Layout", withInfo({
    text: "You can add layout style by inline css.",
    inline: true
    })(() =>
      <Balloon style={{ position: "absolute", top: "0", left: "0"}}>position: absolute;</Balloon>
  ));