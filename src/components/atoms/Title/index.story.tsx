import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Title from "./index";

const stories = storiesOf("Components", module);

stories.add(
  "Title 1",
  withInfo({ inline: true })(() =>
  <Title>Hello world</Title>)
);