import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from './components/Row';
import Col from './components/Col';
import Grid from './components/Grid';

const exampleOnly = {
  yellow: { background: 'yellow' },
  blue: { background: 'blue', color: 'white' },
  red: { background: 'red', color: 'white' },
  orange: { background: 'orange' },
  green: { background: 'green', color: 'white' },
};

storiesOf('Components/Grid System', module)
  .add('Responsive', () => (
    <Row>
      <Col xs={12} sm={3} md={2} lg={1} style={exampleOnly.yellow}>
        xs={12} sm={3} md={2} lg={1}
      </Col>
      <Col xs={6} sm={6} md={8} lg={10} style={exampleOnly.green}>
        xs={6} sm={6} md={8} lg={10}
      </Col>
      <Col xs={6} sm={3} md={2} lg={1} style={exampleOnly.blue}>
        xs={6} sm={3} md={2} lg={1}
      </Col>
    </Row>
  ))
  .add('Grid Fluid', () => (
    <Grid fluid>
      <Row>
        <Col xs={6} md={3}>
          Hello, world!
        </Col>
      </Row>
    </Grid>
  ))
  .add('Offset', () => (
    <Row>
      <Col xsOffset={11} xs={1} style={exampleOnly.green}>
        xsOffset={11} xs={1}
      </Col>
      <Col xsOffset={10} xs={2} style={exampleOnly.red}>
        xsOffset={10} xs={2}
      </Col>
      <Col xsOffset={9} xs={3} style={exampleOnly.green}>
        xsOffset={9} xs={3}
      </Col>
      <Col xsOffset={8} xs={4} style={exampleOnly.red}>
        xsOffset={8} xs={4}
      </Col>
      <Col xsOffset={7} xs={5} style={exampleOnly.green}>
        xsOffset={7} xs={5}
      </Col>
      <Col xsOffset={6} xs={6} style={exampleOnly.red}>
        xsOffset={6} xs={6}
      </Col>
      <Col xsOffset={5} xs={7} style={exampleOnly.green}>
        xsOffset={5} xs={7}
      </Col>
      <Col xsOffset={4} xs={8} style={exampleOnly.red}>
        xsOffset={4} xs={8}
      </Col>
      <Col xsOffset={3} xs={9} style={exampleOnly.green}>
        xsOffset={3} xs={9}
      </Col>
      <Col xsOffset={2} xs={10} style={exampleOnly.red}>
        xsOffset={2} xs={10}
      </Col>
      <Col xsOffset={1} xs={11} style={exampleOnly.green}>
        xsOffset={1} xs={11}
      </Col>
    </Row>
  ))
  .add('Auto Width', () => (
    <Grid fluid>
      <Row>
        <Col xs style={exampleOnly.green}>
          a
        </Col>
        <Col xs style={exampleOnly.red}>
          b
        </Col>
      </Row>
      <Row>
        <Col xs style={exampleOnly.blue}>
          c
        </Col>
        <Col xs style={exampleOnly.orange}>
          orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact
          that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
          text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
          the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
          literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
        </Col>
        <Col xs style={exampleOnly.yellow}>
          e
        </Col>
      </Row>
    </Grid>
  ))
  .add('Alignment: start', () => (
    <Row>
      <Col xs={12}>
        <Row start="xs">
          <Col xs={6} style={exampleOnly.blue}>
            start
          </Col>
        </Row>
      </Col>
    </Row>
  ))
  .add('Alignment: center', () => (
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={6} style={exampleOnly.green}>
            center
          </Col>
        </Row>
      </Col>
    </Row>
  ))
  .add('Alignment: end', () => (
    <Row>
      <Col xs={12}>
        <Row end="xs">
          <Col xs={6} style={exampleOnly.red}>
            end
          </Col>
        </Row>
      </Col>
    </Row>
  ))
  .add('Alignment: top', () => (
    <Row>
      <Col xs={12}>
        <Row top="xs">
          <Col xs={6} style={{ ...exampleOnly.red, height: '100px' }}>
            big element
          </Col>
          <Col xs={6} style={exampleOnly.green}>
            top
          </Col>
        </Row>
      </Col>
    </Row>
  ))
  .add('Alignment: middle', () => (
    <Row>
      <Col xs={12}>
        <Row middle="xs">
          <Col xs={6} style={{ ...exampleOnly.red, height: '100px' }}>
            big-element-6
          </Col>
          <Col xs={5} style={exampleOnly.green}>
            middle-5
          </Col>
          <Col xs={1} style={exampleOnly.green}>
            middle-1
          </Col>
        </Row>
      </Col>
    </Row>
  ))
  .add('Alignment: combination', () => (
    <Row>
      <Col xs={12}>
        <Row middle="xs">
          <Col xs={6} style={{ ...exampleOnly.red, height: '100px' }}>
            big element
          </Col>
          <Col xs={6} style={exampleOnly.green}>
            <Row>
              <Col xs={12} style={exampleOnly.green} />
              <Col xs={12} style={exampleOnly.green} />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  ))
  .add('Alignment: bottom', () => (
    <Row>
      <Col xs={12}>
        <Row bottom="xs">
          <Col xs={6} style={{ ...exampleOnly.red, height: '100px' }}>
            big element
          </Col>
          <Col xs={6} style={exampleOnly.green}>
            bottom
          </Col>
        </Row>
      </Col>
    </Row>
  ))
  .add('Distribution: around', () => (
    <Row around="xs">
      <Col xs={2} style={exampleOnly.red}>
        a
      </Col>
      <Col xs={2} style={exampleOnly.red}>
        b
      </Col>
      <Col xs={2} style={exampleOnly.red}>
        c
      </Col>
    </Row>
  ))
  .add('Distribution: between', () => (
    <Row between="xs">
      <Col xs={2} style={exampleOnly.red}>
        a
      </Col>
      <Col xs={2} style={exampleOnly.red}>
        b
      </Col>
      <Col xs={2} style={exampleOnly.red}>
        c
      </Col>
    </Row>
  ));
