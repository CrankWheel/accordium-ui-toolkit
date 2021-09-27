import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { Divider, InverseDivider } from '../Divider';
import { Icon } from '../Iconography';

storiesOf('Components/Button Component', module)
  .add('with kind props', () => (
    <div>
      <Button>Default Button</Button>
      <Divider />
      <Button kind="primary">Primary Button</Button>
      <Divider />
      <Button kind="success">Success Button</Button>
      <Divider />
      <Button kind="danger">Danger Button</Button>
      <Divider />
      <Button kind="brand">Brand Button</Button>
    </div>
  ))
  .add('with kind & onDark props', () => (
    <div>
      <Button onDark>Default Button</Button>
      <InverseDivider />
      <Button onDark kind="primary">
        Primary Button
      </Button>
      <InverseDivider />
      <Button onDark kind="success">
        Success Button
      </Button>
      <InverseDivider />
      <Button onDark kind="danger">
        Danger Button
      </Button>
      <InverseDivider />
      <Button onDark kind="brand">
        Brand Button
      </Button>
    </div>
  ))
  .add('with flat props', () => (
    <div>
      <Button flat>Flat Default Button</Button>
      <Divider />
      <Button flat kind="primary">
        Flat Primary Button
      </Button>
      <Divider />
      <Button flat kind="success">
        Flat Success Button
      </Button>
      <Divider />
      <Button flat kind="danger">
        Flat Danger Button
      </Button>
      <Divider />
      <Button flat kind="brand">
        Flat Brand Button
      </Button>
    </div>
  ))
  .add('with thinText props', () => (
    <div>
      <Button thinText>thinText Default Button</Button>
      <Divider />
      <Button thinText kind="primary">
        thinText Primary Button
      </Button>
      <Divider />
      <Button thinText kind="danger">
        thinText Danger Button
      </Button>
      <Divider />
      <Button thinText kind="brand">
        thinText Brand Button
      </Button>
    </div>
  ))
  .add('with alt props', () => (
    <div>
      <Button alt>alt Default Button</Button>
      <Divider />
      <Button alt kind="primary">
        alt Primary Button
      </Button>
      <Button alt kind="success">
        alt Success Button
      </Button>
      <Divider />
      <Button alt kind="danger">
        alt Danger Button
      </Button>
      <Divider />
      <Button alt kind="brand">
        alt Brand Button
      </Button>
    </div>
  ))
  .add('3 Buttons Pattern', () => (
    <div>
      <Button alt>Cancel</Button>
      <Button onDark>Skippo</Button>
      <Button>Confirm</Button>
      <Divider />
      <Button alt kind="primary">
        Cancel
      </Button>
      <Button kind="primary" onDark>
        Skippo
      </Button>
      <Button kind="primary">Confirm</Button>
      <Divider />
      <Button alt kind="success">
        Cancel
      </Button>
      <Button kind="success" onDark>
        Skippo
      </Button>
      <Button kind="success">Confirm</Button>
      <Divider />
      <Button alt kind="danger">
        Cancel
      </Button>
      <Button onDark kind="danger">
        Skippo
      </Button>
      <Button kind="danger">Confirm</Button>
      <Divider />
      <Button alt kind="brand">
        Cancel
      </Button>
      <Button onDark kind="brand">
        Skippo
      </Button>
      <Button kind="brand">Confirm</Button>
    </div>
  ))
  .add('3 thin Buttons Pattern', () => (
    <div>
      <Button thinText alt>
        Cancel
      </Button>
      <Button thinText onDark>
        Skippo
      </Button>
      <Button thinText>Confirm</Button>
      <Divider />
      <Button thinText alt kind="primary">
        Cancel
      </Button>
      <Button thinText kind="primary" onDark>
        Skippo
      </Button>
      <Button thinText kind="primary">
        Confirm
      </Button>
      <Divider />
      <Button thinText alt kind="danger">
        Cancel
      </Button>
      <Button thinText onDark kind="danger">
        Skippo
      </Button>
      <Button thinText kind="danger">
        Confirm
      </Button>
      <Divider />
      <Button thinText alt kind="brand">
        Cancel
      </Button>
      <Button thinText onDark kind="brand">
        Skippo
      </Button>
      <Button thinText kind="brand">
        Confirm
      </Button>
    </div>
  ))
  .add('with sizing props', () => (
    <div>
      <Button smallest>Smallest Button</Button>
      <Divider />
      <Button small>Small Button</Button>
      <Divider />
      <Button>Medium Button</Button>
      <Divider />
      <Button large>Large Button</Button>
      <Divider />
      <Button largest>Largest Button</Button>
    </div>
  ))
  .add('with fullWidth props', () => (
    <div>
      <Button fullWidth>Full-Width Button</Button>
    </div>
  ))
  .add('Button with Icon', () => (
    <div>
      <Button icon={<Icon src="add" />}>Good Button</Button>
      <Button icon={<Icon src="add" />} iconPosition="right">
        Right Icon Button
      </Button>
    </div>
  ))
  .add('Icon Only Button', () => (
    <div>
      <Button icon={<Icon src="more_vert" />} iconOnly aria-label="options" />
      <Button icon={<Icon src="add" />} iconOnly aria-label="add" />
      <Button icon={<Icon src="play_arrow" verticalAlign="middle" style={{ color: '#CC9EDE' }} />} iconOnly prime aria-label="add" />
      <Button
        icon={<Icon src="play" verticalAlign="middle" style={{ color: '#CC9EDE' }} />}
        iconOnly
        prime
        small
        aria-label="options"
      />
    </div>
  ))
  .add('Button with Loading Spinner', () => (
    <div>
      <Button loading>Loading Button</Button>
    </div>
  ))
  .add('with noBorder props', () => (
    <div>
      <Button alt small noBorder>
        Don’t show again
      </Button>
    </div>
  ))
  .add('with custom styling props', () => (
    <div>
      <p>Custom buttons</p>
      <Button custom style={{ backgroundColor: '#6CDEA8', color: 'white' }}>
        Success
      </Button>
      <Button custom style={{ backgroundColor: '#ab94dd', color: 'white' }}>
        Redeem Coupons
      </Button>
      <Button custom style={{ backgroundColor: 'rgb(185, 31, 132)', color: 'white' }}>
        EXIT PREVIEW
      </Button>
      <Divider />
      <p>Small custom buttons</p>
      <Button small custom style={{ backgroundColor: '#6CDEA8', color: 'white' }}>
        Success
      </Button>
      <Button small custom style={{ backgroundColor: '#ab94dd', color: 'white' }}>
        Redeem Coupons
      </Button>
      <Button small custom style={{ backgroundColor: 'rgb(185, 31, 132)', color: 'white' }}>
        EXIT PREVIEW
      </Button>
      <Divider />
      <p>Custom buttons with thin text</p>
      <Button thinText custom style={{ backgroundColor: '#6CDEA8', color: 'white' }}>
        Success
      </Button>
      <Button thinText custom style={{ backgroundColor: '#ab94dd', color: 'white' }}>
        Redeem Coupons
      </Button>
      <Button thinText custom style={{ backgroundColor: 'rgb(185, 31, 132)', color: 'white' }}>
        EXIT PREVIEW
      </Button>
      <Divider />
      <p>Small custom buttons with thin text</p>
      <Button small thinText custom style={{ backgroundColor: '#6CDEA8', color: 'white' }}>
        Success
      </Button>
      <Button small thinText custom style={{ backgroundColor: '#ab94dd', color: 'white' }}>
        Redeem Coupons
      </Button>
      <Button small thinText custom style={{ backgroundColor: 'rgb(185, 31, 132)', color: 'white' }}>
        EXIT PREVIEW
      </Button>
      <Divider />
      <p>Icons only</p>
      <Button
        custom
        style={{ backgroundColor: 'rgb(232, 185, 185)', color: 'white' }}
        icon={<Icon src="more_vert" />}
        iconOnly
        aria-label="options"
      />
      <Button
        custom
        style={{ backgroundColor: 'rgb(185, 31, 132)', color: 'white' }}
        icon={<Icon src="play_arrow" verticalAlign="middle" style={{ color: '#CC9EDE' }} />}
        iconOnly
        aria-label="add"
      />
      <Divider />
      <p>Custom full-width buttons</p>
      <Button fullWidth custom style={{ backgroundColor: '#6CDEA8', color: 'white' }}>
        Success
      </Button>
      <Divider />
      <Button fullWidth custom style={{ backgroundColor: '#ab94dd', color: 'white' }}>
        Redeem Coupons
      </Button>
      <Divider />
      <Button fullWidth custom style={{ backgroundColor: 'rgb(185, 31, 132)', color: 'white' }}>
        EXIT PREVIEW
      </Button>
    </div>
  ));
