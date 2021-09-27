import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import Collapsible from './Collapsible';
import { Col, Row } from '../GridSystem';

storiesOf('Components/Collapsible Component', module).add('with kind props', () => {
  function TestCollapsible() {
    const [collapse, setCollapse] = useState(false);
    return (
      <>
        <Button onClick={() => setCollapse(prevState => !prevState)}>Test Button</Button>
        <Collapsible open={collapse}>
          <Row>
            <Col xs={12}>
              <Row middle="xs">
                <Col xs={6} style={{ background: 'red', height: '100px' }}>
                  big element
                </Col>
                <Col xs={6} style={{ background: 'green' }}>
                  middle
                </Col>
              </Row>
            </Col>
          </Row>
        </Collapsible>
      </>
    );
  }
  return <TestCollapsible />;
});