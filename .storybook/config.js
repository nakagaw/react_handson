import React from 'react';
import { configure, addDecorator } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);

// Bese story section style
const BaseLayoutStyle = (story) => (
  <div style={{padding: '20px 40px 40px'}}>
    {story()}
  </div>
);

function loadStories() {
  addDecorator(BaseLayoutStyle)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);

