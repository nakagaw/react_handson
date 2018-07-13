import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';
import Button from "./index";

const stories = storiesOf("Atoms / Button", module);

stories
  .add("Blue", withInfo({ inline: true })(() =>
    <Button color="blue" onClick={action('clicked')}>Button</Button>
  ))
  .add("Green", withInfo({ inline: true })(() =>
    <Button color="green" onClick={action('clicked')}>Button</Button>
  ));