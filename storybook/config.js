/* eslint-disable */
import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';
import '../src/lib/style/accordium-ui-toolkit.scss';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { checkA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console';
import { withCssResources } from '@storybook/addon-cssresources';

configureViewport();

const req = require.context('../src/stories', true);

// Option defaults:
addDecorator(
  withOptions({
    name: 'Accordium UI Component Toolkit',
    url: '#',
  })
);

/*
addDecorator(
  withBackgrounds([
    { name: 'light-grey', value: '#f6f8fa' },
    { name: 'white', value: '#FFF' },
    { name: 'black', value: '#000' , default: true},
    { name: 'blue', value: '#00aced' },
  ])
);
*/

addDecorator(
  withCssResources({
    cssresources: [{
      name: `f6f8fa`,
      code: `<style>body { background-color: #f6f8fa; }</style>`,
      picked: true,
    },
    {
      name: `fff`,
      code: `<style>body { background-color: #fff; }</style>`,
      picked: false,
    },
    {
      name: `000`,
      code: `<style>body { background-color: #000; }</style>`,
      picked: false,
    },
    ],
  })
);

addDecorator(withInfo);
addDecorator(withNotes);
addDecorator(checkA11y);

function loadStories() {
  req.keys().sort().forEach(req);
}

configure(loadStories, module);
