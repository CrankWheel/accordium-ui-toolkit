/* eslint-disable */
import { addDecorator, addParameters, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
import { withCssResources } from '@storybook/addon-cssresources';
import './storybook-fix.scss';
import 'highlight.js/styles/hopscotch.css';
import '../src/titan/register';

const req = require.context('../src/titan', true);

// Option defaults:
addParameters({
  options: {
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Titan UI Component',
  },
});
const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});

// global
addDecorator(withCssResources);
addParameters({
  cssresources: [
    {
      id: `black`,
      code: `<style>body { background-color: #000; }</style>`,
      picked: false,
    },
  ],
});

addDecorator(withInfo);
addDecorator(withNotes);
addDecorator(withA11y);
addDecorator(withKnobs);

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(req);
}

configure(loadStories, module);
