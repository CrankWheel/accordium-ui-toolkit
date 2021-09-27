/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Trail } from 'react-spring/renderprops';
import Container from '../lib/component/Layout/Container';
import TopbarContentItem from '../lib/component/Navigation/Topbar/TopbarContentItem';
import Button from '../lib/component/Button';
import Topbar from '../lib/component/Navigation/Topbar/Topbar';
import ModalHeader from '../lib/component/Modal/ModalHeader';
import ModalContent from '../lib/component/Modal/ModalContent';
import sampleImage from './avatar-example.jpg';
import budgeriegar from './budgeriegar.jpg';
import Modal from '../lib/component/Modal/Modal';
import ModalFooter from '../lib/component/Modal/ModalFooter';
import GridList from '../lib/component/GridList/GridList';
import GridListItem from '../lib/component/GridList/GridListItem';
import Grid from '../lib/component/Layout/Grid';
import ContentPage from '../lib/component/Layout/ContentPage';

const collection = [
  {
    id: 1,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #1',
    title: 'Amazing Video #1',
    caption: 'Caption of Amazing Video #1',
    onClick: action('Video-click: Amazing Video #1'),
    loading: false,
  },
  {
    id: 2,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #2',
    title: 'Amazing Video #2',
    caption: 'Caption of Amazing Video #2',
    onClick: action('Video-click: Amazing Video #2'),
    loading: false,
    thumbnailSelected: false,
  },
  {
    id: 3,
    thumbnailSrc: budgeriegar,
    title: 'Amazing Video #3',
    caption: 'Caption of Amazing Video #3',
    onClick: action('Video-click: Amazing Video #3'),
    loading: false,
  },
  {
    id: 4,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #1',
    title: 'Amazing Video #1',
    caption: 'Caption of Amazing Video #1',
    onClick: action('Video-click: Amazing Video #1'),
    loading: false,
  },
  {
    id: 5,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #2',
    title: 'Amazing Video #2',
    caption: 'Caption of Amazing Video #2',
    onClick: action('Video-click: Amazing Video #2'),
    loading: false,
  },
  {
    id: 6,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #3',
    title: 'Amazing Video #3',
    caption: 'Caption of Amazing Video #3',
    onClick: action('Video-click: Amazing Video #3'),
    loading: true,
  },
  {
    id: 7,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #1',
    title: 'Amazing Video #1',
    caption: 'Caption of Amazing Video #1',
    onClick: action('Video-click: Amazing Video #1'),
    loading: false,
  },
  {
    id: 8,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #2',
    title: 'Amazing Video #2',
    caption: 'Caption of Amazing Video #2',
    onClick: action('Video-click: Amazing Video #2'),
    loading: false,
  },
  {
    id: 9,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #3',
    title: 'Amazing Video #3',
    caption: 'Caption of Amazing Video #3',
    onClick: action('Video-click: Amazing Video #3'),
    loading: true,
  },
  {
    id: 10,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #1',
    title: 'Amazing Video #1',
    caption: 'Caption of Amazing Video #1',
    onClick: action('Video-click: Amazing Video #1'),
    loading: false,
  },
  {
    id: 11,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #2',
    title: 'Amazing Video #2',
    caption: 'Caption of Amazing Video #2',
    onClick: action('Video-click: Amazing Video #2'),
    loading: false,
  },
  {
    id: 12,
    thumbnailSrc: sampleImage,
    thumbnailAlt: 'Thumbnail Video #3',
    title: 'Amazing Video #3',
    caption: 'Caption of Amazing Video #3',
    onClick: action('Video-click: Amazing Video #3'),
    loading: true,
  },
];

storiesOf('Prototype', module)
  .add('Modal', () => {
    class Example extends React.Component {
      state = {
        items: collection,
        show: false,
      };

      showModal = () => this.setState({ show: true }, () => console.log(this.state.show));

      hideModal = () => this.setState({ show: false });

      onItemClick = itemId => {
        this.setState(prevState => {
          const { items } = prevState;
          const itemIndex = items.findIndex(item => item.id === itemId);
          if (itemIndex > -1) {
            items.forEach((item, index, theItems) => {
              theItems[index].thumbnailSelected = false;
            });
            items[itemIndex].thumbnailSelected = true;
            return { items };
          }
          return {};
        });
      };

      render() {
        const { items, show, selectedItem } = this.state;
        return (
          <div className="p1">
            <Button as="button" onClick={() => this.showModal()}>
              Show Modal
            </Button>
            <span>Selected Item: {JSON.stringify(selectedItem)}</span>
            <Modal show={show} titleId="demo-two-title" onExit={this.hideModal}>
              <ModalHeader>
                <h1 className="text-5">My Videos</h1>
              </ModalHeader>
              <ModalContent>
                <GridList>
                  <Container>
                    <Trail items={items} keys={item => item.id} from={{ opacity: 0 }} to={{ opacity: 1 }} leave={{ opacity: 0 }}>
                      {item => props => (
                        <GridListItem
                          key={item.id}
                          title={item.title}
                          caption={item.caption}
                          thumbnailSrc={item.thumbnailSrc}
                          thumbnailAlt={item.thumbnailAlt}
                          thumbnailSelected={item.thumbnailSelected}
                          style={props}
                          xs={12}
                          sm={6}
                          md={4}
                          onItemClick={() => this.onItemClick(item.id)}
                          thumbnailRatio="16:9"
                        />
                      )}
                    </Trail>
                  </Container>
                </GridList>
              </ModalContent>
              <ModalFooter>
                <Button className="m1" negative onClick={action('button-click')}>
                  Cancel
                </Button>
                <Button className="m1" positive onClick={action('button-click')}>
                  Select
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }
    return <Example />;
  })
  .add('Engage Source', () => {
    class Example extends React.Component {
      state = {};

      /* onChange = event => {
      const target = event.target;
      const value = parseFloat(target.value);
      const name = target.name;
      this.setState({ [name]: value }, () => console.log(this.state.firstValue));
    };
*/
      render() {
        return (
          <Container>
            <Topbar contentMaxWidth="1024px">
              <TopbarContentItem>
                <div className="ml1">[Accordium Engage Icon]</div>
              </TopbarContentItem>
              <TopbarContentItem>
                <Button info size="md" className="mr1" onClick={action('button-click')}>
                  Save Draft
                </Button>
                <Button positive size="md" className="ml1 mr1" onClick={action('button-click')}>
                  Send
                </Button>
              </TopbarContentItem>
            </Topbar>
            <ContentPage contentMaxWidth="1024px">
              <Container>
                <Grid xs={8}>
                  <Container>
                    <Grid xs={12}>a</Grid>
                    <Grid xs={12}>b</Grid>
                  </Container>
                </Grid>
                <Grid xs={4}>c</Grid>
              </Container>
            </ContentPage>
          </Container>
        );
      }
    }
    return <Example />;
  });
