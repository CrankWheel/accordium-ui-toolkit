import React from 'react';
import { storiesOf } from '@storybook/react';
import Highlight from 'react-highlight';
import Button from './Button';
import Divider from '../Divider/Divider';
import InverseDivider from '../Divider/InverseDivider';
import Icon from '../Iconography/Icon';

storiesOf('Button Component', module)
  .add('with kind props', () => (
    <div>
      <Button>Default Button</Button>
      <Highlight className="javascript">{`<Button>Default Button</Button>`}</Highlight>
      <Divider />
      <Button kind="primary">Primary Button</Button>
      <Highlight className="javascript">{`<Button kind="primary">Primary Button</Button>`}</Highlight>
      <Divider />
      <Button kind="danger">Danger Button</Button>
      <Highlight className="javascript">{`<Button kind="danger">Danger Button</Button>`}</Highlight>
      <Divider />
      <Button kind="brand">Brand Button</Button>
      <Highlight className="javascript">{`<Button kind="brand">Brand Button</Button>`}</Highlight>
    </div>
  ))
  .add('with kind & dark props', () => (
    <div style={{ background: '#621f31' }}>
      <Button onDark>Default Button</Button>
      <Highlight className="javascript">{`<Button onDark>Dark Default Button</Button>`}</Highlight>
      <InverseDivider />
      <Button onDark kind="primary">
        Primary Button
      </Button>
      <Highlight className="javascript">{`<Button onDark kind="primary">Dark Primary Button</Button>`}</Highlight>
      <InverseDivider />
      <Button onDark kind="danger">
        Danger Button
      </Button>
      <Highlight className="javascript">{`<Button onDark kind="danger">Dark Danger Button</Button>`}</Highlight>
      <InverseDivider />
      <Button onDark kind="brand">
        Brand Button
      </Button>
      <Highlight className="javascript">{`<Button onDark kind="brand">Dark Brand Button</Button>`}</Highlight>
    </div>
  ))
  .add('Cancel & Confirm Buttons Pattern', () => (
    <div>
      <Button alt>Cancel</Button>
      <Button>Confirm</Button>
      <Highlight className="javascript">
        {`<Button alt>Cancel</Button>
            <Button>Confirm</Button>`}
      </Highlight>
      <Divider />
      <Button alt kind="primary">
        Cancel
      </Button>
      <Button kind="primary">Confirm</Button>
      <Highlight className="javascript">
        {`<Button alt kind="primary">Cancel</Button>
            <Button kind="primary">Confirm</Button>`}
      </Highlight>
      <Divider />
      <Button alt kind="danger">
        Cancel
      </Button>
      <Button kind="danger">Confirm</Button>
      <Highlight className="javascript">
        {`<Button alt kind="danger">Cancel</Button>
            <Button kind="danger">Confirm</Button>`}
      </Highlight>
      <Divider />
      <Button alt kind="brand">
        Cancel
      </Button>
      <Button kind="brand">Confirm</Button>
      <Highlight className="javascript">
        {`<Button alt kind="brand">Cancel</Button>
            <Button kind="brand">Confirm</Button>`}
      </Highlight>
    </div>
  ))
  .add('with flat props', () => (
    <div>
      <Button flat>Flat Default Button</Button>
      <Highlight className="javascript">{`<Button flat>Flat Default Button</Button>`}</Highlight>
      <Divider />
      <Button flat kind="primary">
        Flat Primary Button
      </Button>
      <Highlight className="javascript">{`<Button flat kind="primary">Flat Primary Button</Button>`}</Highlight>
      <Divider />
      <Button flat kind="danger">
        Flat Danger Button
      </Button>
      <Highlight className="javascript">{`<Button flat kind="danger">Flat Danger Button</Button>`}</Highlight>
      <Divider />
      <Button flat kind="brand">
        Flat Brand Button
      </Button>
      <Highlight className="javascript">{`<Button flat kind="brand">Flat Brand Button</Button>`}</Highlight>
    </div>
  ))
  .add('with sizing props', () => (
    <div>
      <Button small>Small Button</Button>
      <Highlight className="javascript">{`<Button small>Small Button</Button>`}</Highlight>
      <Divider />
      <Button>Medium Button</Button>
      <Highlight className="javascript">{`<Button disabled>Medium Button</Button>`}</Highlight>
      <Divider />
      <Button large>Large Button</Button>
      <Highlight className="javascript">{`<Button disabled>Large Button</Button>`}</Highlight>
    </div>
  ))
  .add('with fullWidth props', () => (
    <div>
      <Button fullWidth>Full-Width Button</Button>
      <Highlight className="javascript">{`<Button fullWidth>Full-Width Button</Button>`}</Highlight>
    </div>
  ))
  .add('Button with Icon', () => (
    <div>
      <Button icon={<Icon src="add" />}>Good Button</Button>
      <Highlight className="javascript">{`<Button icon={<Icon src="add"/>}>Good Button</Button>`}</Highlight>
      <Button icon={<Icon src="add" />} iconPosition="right">
        Right Icon Button
      </Button>
      <Highlight className="javascript">{`<Button icon={<Icon src="add"/>}>Right Icon Button</Button>`}</Highlight>
    </div>
  ))
  .add('Icon Only Button', () => (
    <div>
      <Button icon={<Icon src="more_vert" />} iconOnly aria-label="options" />
      <Highlight className="javascript">{`<Button icon={<Icon src="more_vert" />} iconOnly aria-label="options" />`}</Highlight>
      <Button icon={<Icon src="add" />} iconOnly aria-label="add" />
      <Highlight className="javascript">{`<Button icon={<Icon src="add"/>}>Right Icon Button</Button>`}</Highlight>
      <Button icon={<Icon src="play_arrow" verticalAlign="middle" style={{ color: '#CC9EDE' }} />} iconOnly prime aria-label="add" />
      <Highlight className="javascript">{`<Button icon={<Icon src="play_arrow" verticalAlign="middle" style={{ color: '#CC9EDE' }} />} iconOnly prime aria-label="add" />`}</Highlight>
      <Button
        icon={<Icon src="play" verticalAlign="middle" style={{ color: '#CC9EDE' }} />}
        iconOnly
        prime
        small
        aria-label="options"
      />
      <Highlight className="javascript">{`<Button
        icon={<Icon src="play" verticalAlign="middle" style={{ color: '#CC9EDE' }} />}
        iconOnly
        prime
        small
        aria-label="options"
      />`}</Highlight>
    </div>
  ))
  .add('Button with Loading Spinner', () => (
    <div>
      <Button loading>Loading Button</Button>
      <Highlight className="javascript">{`<Button loading>Loading Button</Button>`}</Highlight>
    </div>
  ));
