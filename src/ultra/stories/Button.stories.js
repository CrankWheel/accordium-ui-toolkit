/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../lib/component/Button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button primary onClick={action('button-click')}>
      Primary Button
    </Button>
  ))
  .add('Secondary', () => (
    <Button secondary onClick={action('button-click')}>
      Secondary Button
    </Button>
  ))
  .add('Positive', () => (
    <Button positive onClick={action('button-click')}>
      Positive Button
    </Button>
  ))
  .add('Negative', () => (
    <Button negative onClick={action('button-click')}>
      Negative Button
    </Button>
  ))
  .add('Info', () => (
    <Button info onClick={action('button-click')}>
      Info Button
    </Button>
  ))
  .add('Warning', () => (
    <Button warning onClick={action('button-click')}>
      Warning Button
    </Button>
  ))
  .add('Inverted Primary', () => (
    <Button inverted primary onClick={action('button-click')}>
      Primary Button
    </Button>
  ))
  .add('Inverted Secondary', () => (
    <Button inverted secondary onClick={action('button-click')}>
      Secondary Button
    </Button>
  ))
  .add('Inverted Positive', () => (
    <Button inverted positive onClick={action('button-click')}>
      Positive Button
    </Button>
  ))
  .add('Inverted Negative', () => (
    <Button inverted negative onClick={action('button-click')}>
      Negative Button
    </Button>
  ))
  .add('Inverted Info', () => (
    <Button inverted info onClick={action('button-click')}>
      Info Button
    </Button>
  ))
  .add('Inverted Warning', () => (
    <Button inverted warning onClick={action('button-click')}>
      Warning Button
    </Button>
  ))
  .add('Loading', () => <Button loading>Hello Button</Button>)
  .add('Inverted Loading', () => (
    <Button loading inverted>
      Hello Button
    </Button>
  ))
  .add('Custom Loading Text', () => (
    <Button loading loadingText="Generating Preview">
      Hello Button
    </Button>
  ))
  .add('As an anchor link', () => (
    <Button as="a" className="text-2" color="red" onClick={action('button-click')}>
      Anchor Link
    </Button>
  ))
  .add('Fixed Width Button', () => (
    <Button positive onClick={action('button-click')} fixedWidth="200px">
      Send
    </Button>
  ))
  .add(
    'Full-width button',
    () => (
      <Button primary block size="xl" onClick={action('button-click')}>
        Primary Button
      </Button>
    ),
    {
      notes: 'Primary Button lorem ipsum',
    }
  )
  .add('Disabled', () => <Button disabled>Disabled Button</Button>)
  .add('Button Size', () => (
    <div style={{ padding: '20px' }}>
      <Button size="xs" className="m2">
        size="xs"
      </Button>
      <Button size="sm" className="m2">
        size="sm"
      </Button>
      <Button size="md" className="m2">
        size="md"
      </Button>
      <Button size="lg" className="m2">
        size="lg"
      </Button>
      <Button size="xl" className="m2">
        size="xl"
      </Button>
    </div>
  ))
  .add('with some emoji', () => (
    <Button size="sm" color="green">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
