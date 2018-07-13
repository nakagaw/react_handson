import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Heading from "./index";

const stories = storiesOf("Atoms / Heading", module);

stories
  .add("Default", withInfo({
    text: "No props, Default is H2 tag.",
    inline: true
    })(() =>
    <Heading>Hello world</Heading>
  ))
  .add("H1 level1", withInfo({ inline: true })(() =>
    <Heading level={1} visualLevel={1}>Hello world</Heading>
  ))
  .add("H2 level2", withInfo({ inline: true })(() =>
    <Heading level={2} visualLevel={2}>Hello world</Heading>
  ))
  .add("H3 level3", withInfo({ inline: true })(() =>
    <Heading level={3} visualLevel={3}>Hello world</Heading>
  ))
  .add("H1, but level3", withInfo({
    text: "You can use different level and visualLevel.",
    inline: true
    })(() =>
    <Heading level={1} visualLevel={3}>Hello world</Heading>
  ))