import React, { useState } from 'react';
import { Tabs, Tab } from './index';

export default {
  component: [Tabs, Tab],
  title: 'Components/Tabs',
};

class TabsTest extends React.Component {
  state = {
    index: 1,
    fixedIndex: 1,
    inverseIndex: 1,
  };

  handleTabChange = index => {
    this.setState({ index });
  };

  handleFixedTabChange = index => {
    this.setState({ fixedIndex: index });
  };

  handleInverseTabChange = index => {
    this.setState({ inverseIndex: index });
  };

  handleActive = () => {
    console.log('Special one activated');
  };

  render() {
    return (
      <section>
        <h5>Fixed Tabs</h5>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label="First">
            <small>First Content</small>
          </Tab>
          <Tab label="Second">
            <small>Second Content</small>
          </Tab>
          <Tab label="Third">
            <small>Third Content</small>
          </Tab>
        </Tabs>
        <h5>Inverse Tabs</h5>
      </section>
    );
  }
}
/*
export const tab = () => <TabsTest />;
*/

export const DefaultTab = () => {
  const [index, setIndex] = useState(1);
  return (
    <Tabs index={index} onChange={tabIndex => setIndex(tabIndex)}>
      <Tab label="Primary">a</Tab>
      <Tab label="Secondary" onActive={() => console.log('Special one activated')}>
        b
      </Tab>
      <Tab label="Third" disabled>
        c
      </Tab>
      <Tab label="Fourth" hidden>
        d
      </Tab>
      <Tab label="Fifth">e</Tab>
    </Tabs>
  );
};

export const MaterialTab = () => {
  const [index, setIndex] = useState(1);
  return (
    <Tabs material index={index} onChange={tabIndex => setIndex(tabIndex)}>
      <Tab label="Primary">a</Tab>
      <Tab label="Secondary" onActive={() => console.log('Special one activated')}>
        b
      </Tab>
      <Tab label="Third" disabled>
        c
      </Tab>
      <Tab label="Fourth" hidden>
        d
      </Tab>
      <Tab label="Fifth">e</Tab>
    </Tabs>
  );
};

export const FixedTab = () => {
  const [fixedIndex, setFixedIndex] = useState(1);
  return (
    <Tabs index={fixedIndex} onChange={tabIndex => setFixedIndex(tabIndex)} fixed>
      <Tab label="First">
        <small>First Content</small>
      </Tab>
      <Tab label="Second">
        <small>Second Content</small>
      </Tab>
      <Tab label="Third">
        <small>Third Content</small>
      </Tab>
    </Tabs>
  );
};

export const InverseTab = () => {
  const [inverseIndex, setInverseIndex] = useState(1);
  return (
    <Tabs index={inverseIndex} onChange={tabIndex => setInverseIndex(tabIndex)} inverse>
      <Tab label="First">
        <small>First Content</small>
      </Tab>
      <Tab label="Second">
        <small>Second Content</small>
      </Tab>
      <Tab label="Third">
        <small>Third Content</small>
      </Tab>
      <Tab label="Disabled" disabled>
        <small>Disabled Content</small>
      </Tab>
    </Tabs>
  );
};
/*
export const emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const card = () => <Card title />;

export const card2 = () => <Card2 title="teen" />;
*/
