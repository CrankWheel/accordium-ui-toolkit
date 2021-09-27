import React from 'react';
import { storiesOf } from '@storybook/react';
import Highlight from 'react-highlight';
import Icon from './Icon';

storiesOf('Icon Component', module)
  .add('with default props', () => (
    <div>
      <Icon src="autorenew" />
      <Icon src="account_circle" />
      <Icon src="add_circle" />
      <Highlight className="javascript">
        {`<Icon src="autorenew" />
<Icon src="account_circle" />
<Icon src="add_circle" />`}
      </Highlight>
    </div>
  ))
  .add('Larger Icon example', () => (
    <div>
      <div style={{ fontSize: '48px' }}>
        <Icon src="autorenew" />
        <Icon src="account_circle" />
        <Icon src="add_circle" />
      </div>
      <Highlight className="javascript">
        {`<div style={{fontSize: '48px'}}>
    <Icon src="autorenew"/>
    <Icon src="account_circle"/>
    <Icon src="add_circle"/>
    </div>`}
      </Highlight>
    </div>
  ))
  .add('Color Icon example', () => (
    <div>
      <div style={{ fontSize: '48px', color: 'green' }}>
        <Icon src="autorenew" style={{ stroke: 'red' }} />
        <Icon src="account_circle" style={{ fill: 'currentColor' }} />
        <Icon src="add_circle" style={{ fill: 'blue' }} />
      </div>
      <Highlight className="javascript">
        {`<div style={{fontSize: '48px', color: 'green'}}>
  <Icon src="autorenew" style={{stroke: 'red'}}/>
  <Icon src="account_circle" style={{fill: 'currentColor'}}/>
  <Icon src="add_circle" style={{fill: 'blue'}}/>
</div>`}
      </Highlight>
    </div>
  ))
  .add('Alignment with Text example', () => (
    <div>
      <h1>
        Exit <Icon src="exit_to_app" verticalAlign="baseline" />
      </h1>
      <Highlight className="javascript">
        {`<h1>
    Exit <Icon src="exit_to_app" verticalAlign="baseline" />
</h1>`}
      </Highlight>
    </div>
  ))
  .add('Spinner Icon [animated] example', () => (
    <div>
      <Icon style={{ fontSize: '48px' }} src="spinner_md" />
      <Highlight className="javascript">{`<Icon style={{'fontSize': '48px'}} src="spinner-md"/>`}</Highlight>
    </div>
  ));
