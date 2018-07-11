import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Img from "./index";

const stories = storiesOf("Atoms / Img", module);
const imageFile = require("../../../images/1.gif");

stories
  .add("Default", withInfo({ inline: true })(() =>
      <Img src={imageFile} alt="踊るメガネ女子" width="417" height="347"/>
  ));