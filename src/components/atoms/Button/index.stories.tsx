import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./index";

const stories = storiesOf("Atoms/Button", module);

stories
  .add("Blue", withInfo({ inline: true })(() =>
    <Button color="blue">Button</Button>
  ))
  .add("Green", withInfo({ inline: true })(() =>
      <Button color="green">Button</Button>
  ));