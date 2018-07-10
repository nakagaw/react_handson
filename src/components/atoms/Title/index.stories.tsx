import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Title from "./index";

const stories = storiesOf("Atoms/Title", module);

stories
  .add("Large", withInfo({ inline: true })(() =>
    <Title>Hello world</Title>
  ));