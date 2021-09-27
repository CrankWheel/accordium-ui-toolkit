/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '../lib/component/Modal/Modal';
import Button from '../lib/component/Button';
import ModalHeader from '../lib/component/Modal/ModalHeader';
import ModalContent from '../lib/component/Modal/ModalContent';
import ModalFooter from '../lib/component/Modal/ModalFooter';
import Grid from '../lib/component/Layout/Grid';
import Container from '../lib/component/Layout/Container';
import InputField from '../lib/component/Form/InputField';

storiesOf('Modal', module)
  .add('Default', () => {
    class Example extends React.Component {
      state = {
        show: false,
      };

      showModal = () => this.setState({ show: true }, () => console.log(this.state.show));

      hideModal = () => this.setState({ show: false });

      render() {
        console.log('modal stories');
        const { show } = this.state;
        return (
          <Fragment>
            <Button as="button" onClick={() => this.showModal()}>
              Show Modal
            </Button>
            <Modal show={show} titleId="demo-two-title" onExit={this.hideModal}>
              <ModalHeader>
                <h1 className="text-5">New Contact</h1>
              </ModalHeader>
              <ModalContent>
                <Container>
                  <Grid xs={6} sm={6} md={6} className="pr2">
                    <InputField label="First Name" name="firstName" readOnly />
                  </Grid>
                  <Grid xs={6} sm={4} md={6} className="pl2">
                    <InputField label="Last Name" name="lastName" readOnly />
                  </Grid>
                  <Grid xs={12} sm={2} md={12}>
                    <InputField label="Company Name" name="companyName" readOnly />
                  </Grid>
                </Container>
              </ModalContent>
              <ModalFooter>
                <Button className="m1" negative onClick={action('button-click')}>
                  Cancel
                </Button>
                <Button className="m1" positive onClick={action('button-click')}>
                  Submit
                </Button>
              </ModalFooter>
            </Modal>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Fragment>
        );
      }
    }
    return <Example />;
  })
  .add('Scrolling Content', () => {
    class Example extends React.Component {
      state = {
        show: false,
      };

      showModal = () => this.setState({ show: true }, () => console.log(this.state.show));

      hideModal = () => this.setState({ show: false });

      render() {
        console.log('modal stories');
        const { show } = this.state;
        return (
          <Fragment>
            <Button as="button" onClick={() => this.showModal()}>
              Show Modal
            </Button>
            <Modal show={show} titleId="demo-two-title" onExit={this.hideModal}>
              <ModalHeader>
                <h1 className="text-5">New Contact</h1>
              </ModalHeader>
              <ModalContent scrolling>
                <Container>
                  <Grid xs={6} sm={6} md={6} className="pr2">
                    <InputField label="First Name" name="firstName" readOnly />
                  </Grid>
                  <Grid xs={6} sm={4} md={6} className="pl2">
                    <InputField label="Last Name" name="lastName" readOnly />
                  </Grid>
                  <Grid xs={12} sm={2} md={12}>
                    <InputField label="Company Name" name="companyName" readOnly />
                  </Grid>
                </Container>
              </ModalContent>
              <ModalFooter>
                <Button className="m1" negative onClick={action('button-click')}>
                  Cancel
                </Button>
                <Button className="m1" positive onClick={action('button-click')}>
                  Submit
                </Button>
              </ModalFooter>
            </Modal>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Fragment>
        );
      }
    }
    return <Example />;
  });
