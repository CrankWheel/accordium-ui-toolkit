import React from 'react';
import { storiesOf } from '@storybook/react';
import Chip from './Chip';
import Avatar from '../Avatar/Avatar';
import Icon from '../Iconography/Icon';

class ChipTest extends React.Component {
  state = {
    deleted: false,
  };

  handleDeleteClick = () => {
    this.setState({
      deleted: true,
    });
  };

  render() {
    return (
      <section>
        <Chip>Example chip</Chip>
        <Chip>
          <span style={{ textDecoration: 'line-through' }}>Standard</span>
          <strong>Custom</strong> chip <small>(custom markup)</small>
        </Chip>

        {this.state.deleted ? null : (
          <Chip deletable onDeleteClick={this.handleDeleteClick}>
            Deletable Chip
          </Chip>
        )}

        <Chip>
          <Avatar style={{ backgroundColor: 'deepskyblue' }} icon={<Icon src="add" />} />
          <span>Avatar Chip</span>
        </Chip>

        <Chip>
          <Avatar title="A" />
          <span>Initial chip</span>
        </Chip>

        <Chip>
          <Avatar>
            <img src="https://placeimg.com/80/80/animals" />
          </Avatar>
          <span>Image contact chip</span>
        </Chip>
      </section>
    );
  }
}

class ChipMiniTest extends React.Component {
  state = {
    deleted: false,
  };

  handleDeleteClick = () => {
    this.setState({
      deleted: true,
    });
  };

  render() {
    return (
      <section>
        <Chip mini>N/A</Chip>
        <Chip mini kind="primary">
          CALLBACK
        </Chip>
        <Chip mini>
          <span style={{ textDecoration: 'line-through' }}>CALLBACK</span>
          <strong>Custom</strong> chip <small>(custom markup)</small>
        </Chip>

        {this.state.deleted ? null : (
          <Chip mini kind="primary" deletable onDeleteClick={this.handleDeleteClick}>
            Deletable Chip
          </Chip>
        )}
      </section>
    );
  }
}

storiesOf('Chip Component', module)
  .add('default', () => <ChipTest />)
  .add('mini', () => <ChipMiniTest />)
  .add('color', () => (
    <div>
      <Chip mini kind="primary">
        CALLBACK
      </Chip>
      <Chip mini kind="brand">
        CALLBACK
      </Chip>
      <Chip mini kind="danger">
        CALLBACK
      </Chip>
      <Chip mini kind="default">
        CALLBACK
      </Chip>
      <Chip mini kind="accent1">
        CALLBACK
      </Chip>
      <Chip mini kind="accent2">
        CALLBACK
      </Chip>
      <Chip mini kind="accent3">
        CALLBACK
      </Chip>
      <Chip mini kind="accent4">
        CALLBACK
      </Chip>
    </div>
  ));
