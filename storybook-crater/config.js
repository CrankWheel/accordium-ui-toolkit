/* eslint-disable */
import { addDecorator, addParameters, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-console';
import { withCssResources } from '@storybook/addon-cssresources';
import crateTheme from './crateTheme';
import './storybook-fix.scss';
import 'highlight.js/styles/hopscotch.css';
import '../src/crater/register';

// Option defaults:
addParameters({
  options: {
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Crate UI',
    theme: crateTheme,
  },
});

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
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

addDecorator(withA11y);
addDecorator(withKnobs);

configure(require.context('../src/crater', true, /\.stories\.(js|mdx)$/), module);

