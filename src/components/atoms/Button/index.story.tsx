import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./index";

const stories = storiesOf("Components", module);

stories.add(
  "Button",
  withInfo({ inline: true })(() =>
  <Button color="blue">Button</Button>)
);