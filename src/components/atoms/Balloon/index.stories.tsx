import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Balloon from "./index";

const stories = storiesOf("Atoms / Balloon", module);

stories
  .add("Default", withInfo({ inline: true })(() =>
      <Balloon>削除する</Balloon>
  ))
  .add("Free Layout", withInfo({ inline: true })(() =>
      <Balloon style={{ position: "absolute", top: "0", left: "0"}}>削除する</Balloon>
  ));