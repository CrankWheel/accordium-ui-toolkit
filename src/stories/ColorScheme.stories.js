/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Color Scheme', module).add('All Colors', () => (
  <div className="m1 p1" style={{ backgroundColor: '#FFF', width: '500px' }}>
    <div className="text-5">Colors HEX </div>
    <div className="text-3">
      $color-red: #EA406D; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#EA406D' }} />
    </div>
    <div className="text-3">
      $color-green: #2FC9AF; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#2FC9AF' }} />
    </div>
    <div className="text-3">
      $color-blue: #17C0F7; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#17C0F7' }} />
    </div>
    <div className="text-3">
      $color-orange: #F4B171; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#F4B171' }} />
    </div>
    <div className="text-3">
      $color-dark-blue: #233B5C; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#233B5C' }} />
    </div>
    <div className="text-3">
      $color-purple: #786DC4; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#786DC4' }} />
    </div>
    <div className="text-3">
      $color-shadows: #1C2F49; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#1C2F49' }} />
    </div>
    <div className="text-3">
      $color-type-gray: #454f5e; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#454f5e' }} />
    </div>
    <div className="text-3">
      $color-white: #FFFFFF; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#FFFFFF' }} />
    </div>
    <div className="text-3">
      $color-black: #000000; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#000000' }} />
    </div>
    <div className="text-3">
      $color-light-gray: #B0B7C1;{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#B0B7C1' }} />
    </div>
    <div className="text-3">
      $color-lightest-gray: #FAFAFA;{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#FAFAFA' }} />
    </div>
    <div className="text-3">
      $color-app-background: #F6F8FA;{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#F6F8FA' }} />
    </div>
    <div className="text-3">
      $color-template-background: #FEF6E7;{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#FEF6E7' }} />
    </div>
    <div className="text-3">
      $color-video: #9776D6; <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#9776D6' }} />
    </div>
    <div className="text-3" />
    <div className="text-5">
      Colors RGB <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '' }} />
    </div>
    <div className="text-3">
      $color-red-rgb: rgb(234, 64, 109);{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(234, 64, 109)' }} />
    </div>
    <div className="text-3">
      $color-green-rgb: rgb(47, 201, 175);{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(47, 201, 175)' }} />
    </div>
    <div className="text-3">
      $color-blue-rgb: rgb(23, 192, 247);{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(23, 192, 247)' }} />
    </div>
    <div className="text-3">
      $color-orange-rgb: rgb(244, 177, 113);
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(244, 177, 113)' }} />
    </div>
    <div className="text-3">
      $color-dark-blue-rgb: rgb(35, 59, 92);{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(35, 59, 92)  ' }} />
    </div>
    <div className="text-3">
      $color-type-gray-rgb: rgb(90, 120, 143);{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(90, 120, 143)' }} />
    </div>
    <div className="text-3">
      $color-white-rgb: rgb(255, 255, 255);
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(255, 255, 255)' }} />
    </div>
    <div className="text-3">
      $color-black-rgb: rgb(0,0,0);{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(0,0,0)       ' }} />
    </div>
    <div className="text-3">
      $color-light-gray-rgb: rgb(176, 183, 193);
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(176, 183, 193)' }} />
    </div>
    <div className="text-3">
      $color-lightest-gray-rgb: rgb(250, 250, 250);
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(250, 250, 250)' }} />
    </div>
    <div className="text-3">
      $color-shadows-rgb: rgb(28, 47, 73);{' '}
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(28, 47, 73)  ' }} />
    </div>
    <div className="text-3">
      $color-app-background-rgb: rgb(246, 248, 250);
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(246, 248, 250)' }} />
    </div>
    <div className="text-3">
      $color-video-rgb: rgb(151, 118, 214);
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(151, 118, 214)' }} />
    </div>
    <div className="text-3">
      $color-purple-rgb: rgb(120, 109, 196);
      <div style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'rgb(120, 109, 196)' }} />
    </div>
  </div>
));
