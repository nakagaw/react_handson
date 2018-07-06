import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./index";

storiesOf("Components", module).add(
  "Button",
  withInfo({ inline: true })(() => (
    <Button color="blue">Button</Button>
  )),
);



// 古い
// import * as React from 'react';
// import { storiesOf } from '@storybook/react';
// import Button from "./index";

// storiesOf('Button', module)
//   .add('Button Normal', () => <Button className='normal'>Hello world</Button>)
//   .add('Button Primary', () => <Button className='primary'>Hello world</Button>)
