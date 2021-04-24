import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'React Twitter Embed',  
  url: '#',
  showStoriesPanel: true,
  showAddonPanel: true,
  addonPanelInRight: true,
  selectedAddonPanel: "Backgrounds",
  header: false, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
  source: true,
});

configure(() => require('../src/stories'), module);

