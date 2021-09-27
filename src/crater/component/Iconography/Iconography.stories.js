import React from 'react';
import { storiesOf } from '@storybook/react';
import Highlight from 'react-highlight';
import Icon from './Icon';

storiesOf('Components/Icon Component', module)
  .add('with default props', () => (
    <div>
      <Icon src="product_engage" />
      <Icon src="product_contract" />
      <Icon src="help" />
      <Highlight className="javascript">
        {`<Icon src="product_engage" />
<Icon src="product_contract" />
<Icon src="help" />`}
      </Highlight>
    </div>
  ))
  .add('Larger Icon example', () => (
    <div>
      <div style={{ fontSize: '48px' }}>
        <Icon src="product_engage" />
        <Icon src="product_contract" />
        <Icon src="help" />
      </div>
      <Highlight className="javascript">
        {`<div style={{fontSize: '48px'}}>
    <Icon src="product_engage"/>
    <Icon src="product_contract"/>
    <Icon src="help"/>
    </div>`}
      </Highlight>
    </div>
  ))
  .add('Color Icon example', () => (
    <div>
      <div style={{ fontSize: '48px', color: 'green' }}>
        <Icon src="product_engage" style={{ stroke: 'red' }} />
        <Icon src="product_contract" style={{ fill: 'currentColor' }} />
        <Icon src="help" style={{ fill: 'blue' }} />
      </div>
      <Highlight className="javascript">
        {`<div style={{fontSize: '48px', color: 'green'}}>
  <Icon src="product_engage" style={{stroke: 'red'}}/>
  <Icon src="product_contract" style={{fill: 'currentColor'}}/>
  <Icon src="help" style={{fill: 'blue'}}/>
</div>`}
      </Highlight>
    </div>
  ))
  .add('Alignment with Text example', () => (
    <div>
      <h1>
        Exit <Icon src="signout" verticalAlign="baseline" />
      </h1>
      <Highlight className="javascript">
        {`<h1>
    Exit <Icon src="signout" verticalAlign="baseline" />
</h1>`}
      </Highlight>
    </div>
  ))
  .add('Spinner Icon [animated] example', () => (
    <div>
      <Icon style={{ fontSize: '48px' }} src="spinner_md" />
      <Highlight className="javascript">{`<Icon style={{'fontSize': '48px'}} src="spinner-md"/>`}</Highlight>
    </div>
  ))
  .add('Eye Icon example', () => (
    <div>
      <Icon style={{ fontSize: '48px' }} src="eye_slash" />
      <Icon style={{ fontSize: '48px' }} src="eye_not_slash" />
      <Highlight className="javascript">
        {`<Icon style={{'fontSize': '48px'}} src="eye_slash" />
<Icon style={{'fontSize': '48px'}} src="eye_not_slash" />`}
      </Highlight>
    </div>
  ));
