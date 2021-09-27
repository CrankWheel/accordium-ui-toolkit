/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

storiesOf('Typography', module)
  .addDecorator(checkA11y)
  .add('Heading', () => (
    <div className="p2">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  ))
  .add('Text', () => (
    <div className="p2">
      <div className="text-1">text-1</div>
      <div className="text-2">text-2</div>
      <div className="text-3">text-3</div>
      <div className="text-4">text-4</div>
      <div className="text-5">text-5</div>
      <div className="text-6">text-6</div>
    </div>
  ))
  .add('Text Style and Weight', () => (
    <div className="p2">
      <div className="bold">bold</div>
      <div className="italic">italic</div>
      <div className="caps">caps</div>
      <div className="regular">regular</div>
      <div className="truncate" style={{ width: '100px' }}>
        this text will be truncated
      </div>
    </div>
  ))
  .add('Text Alignment', () => (
    <div className="p2">
      <div className="left-align" style={{ width: '100%' }}>
        left-align
      </div>
      <div className="center" style={{ width: '100%' }}>
        center
      </div>
      <div className="right-align" style={{ width: '100%' }}>
        right-align
      </div>
      <div className="justify" style={{ width: '100%' }}>
        justify
      </div>
    </div>
  ));
