/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('CSS Utitlity Classes', module)
  .add('Padding', () => (
    <Fragment>
      <div>
        <p>
          <b>padding:</b> top, left, bottom, and right
        </p>
        <div className="p0 border">className="p0"</div>
        <div className="p1 border">className="p1"</div>
        <div className="p2 border">className="p2"</div>
        <div className="p3 border">className="p3"</div>
        <div className="p4 border">className="p4"</div>
      </div>
      <div>
        <p>
          <b>padding:</b> top and bottom
        </p>
        <div className="py0 border">className="py0"</div>
        <div className="py1 border">className="py1"</div>
        <div className="py2 border">className="py2"</div>
        <div className="py3 border">className="py3"</div>
        <div className="py4 border">className="py4"</div>
      </div>
      <div>
        <p>
          <b>padding:</b> right and left
        </p>
        <div className="px0 border">className="px0"</div>
        <div className="px1 border">className="px1"</div>
        <div className="px2 border">className="px2"</div>
        <div className="px3 border">className="px3"</div>
        <div className="px4 border">className="px4"</div>
      </div>
    </Fragment>
  ))
  .add('Margin', () => (
    <Fragment>
      <div>
        <p>
          <b>margin:</b> auto
        </p>
        <div style={{ width: '100%' }}>
          <div className="mx-auto border center" style={{ width: '300px' }}>
            className="mx-auto"
          </div>
        </div>
      </div>
      <div>
        <p>
          <b>margin:</b> top, left, bottom, and right
        </p>
        <div className="m0 border">className="m0"</div>
        <div className="m1 border">className="m1"</div>
        <div className="m2 border">className="m2"</div>
        <div className="m3 border">className="m3"</div>
        <div className="m4 border">className="m4"</div>
      </div>
      <div>
        <p>
          <b>margin:</b> top
        </p>
        <div className="mt0 border">className="mt0"</div>
        <div className="mt1 border">className="mt1"</div>
        <div className="mt2 border">className="mt2"</div>
        <div className="mt3 border">className="mt3"</div>
        <div className="mt4 border">className="mt4"</div>
      </div>
      <div>
        <p>
          <b>margin:</b> right
        </p>
        <div className="mr0 border">className="mr0"</div>
        <div className="mr1 border">className="mr1"</div>
        <div className="mr2 border">className="mr2"</div>
        <div className="mr3 border">className="mr3"</div>
        <div className="mr4 border">className="mr4"</div>
      </div>
      <div>
        <p>
          <b>margin:</b> bottom
        </p>
        <div className="mb0 border">className="mb0"</div>
        <div className="mb1 border">className="mb1"</div>
        <div className="mb2 border">className="mb2"</div>
        <div className="mb3 border">className="mb3"</div>
        <div className="mb4 border">className="mb4"</div>
      </div>
      <div>
        <p>
          <b>margin:</b> left
        </p>
        <div className="ml0 border">className="ml0"</div>
        <div className="ml1 border">className="ml1"</div>
        <div className="ml2 border">className="ml2"</div>
        <div className="ml3 border">className="ml3"</div>
        <div className="ml4 border">className="ml4"</div>
      </div>
    </Fragment>
  ));
