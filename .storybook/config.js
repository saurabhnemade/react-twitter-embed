// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure } from '@kadira/storybook';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
  source: true,
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
