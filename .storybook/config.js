import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/atoms/Button/index.story.tsx');
}
configure(loadStories, module);