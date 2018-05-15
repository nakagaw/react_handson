import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// const req = require.context('../src/components/stories', true, /.stories.tsx$/);
function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require('../src/components/stories/atoms.story.tsx');
}

configure(loadStories, module);
