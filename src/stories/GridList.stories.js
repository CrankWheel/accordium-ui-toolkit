/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Trail } from 'react-spring/renderprops';
import { Container, Grid } from '../lib/component/Layout';
import GridList from '../lib/component/GridList/GridList';
import sampleImage from './avatar-example.jpg';
import Card from '../lib/component/Card/Card';
import Image from '../lib/component/Image/Image';
import CardContent from '../lib/component/Card/Card/CardContent';
import CardContentHeader from '../lib/component/Card/Card/CardContentHeader';
import CardContentCaption from '../lib/component/Card/Card/CardContentCaption';
import GridListItem from '../lib/component/GridList/GridListItem';

const items = [
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
    thumbnailSrc: sampleImage,
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

storiesOf('List/GridList', module)
  .add('default', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <GridList items={items} onItemClick={action('on-item-click')} />
      </Grid>
    </Container>
  ))
  .add('Custom List Item', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <GridList>
          <Container>
            <Trail
              items={items}
              keys={item => item.id}
              /* from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
              to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
              leave={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }} */
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {item => props => (
                <Grid xs={12} sm={6} md={4} className="grid-list-item p1" style={props}>
                  <Card className="grid-list-item-card">
                    <Image src={item.thumbnailSrc} fluid alt={item.thumbnailAlt} />
                    <CardContent className="grid-list-item-content">
                      <CardContentHeader className="text-2">{item.title}</CardContentHeader>
                      <CardContentCaption className="text-2">{item.caption}</CardContentCaption>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Trail>
          </Container>
        </GridList>
      </Grid>
    </Container>
  ))
  .add('Thumbnail with Ratio', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <GridList>
          <Container>
            <Trail
              items={items}
              keys={item => item.id}
              /* from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
              to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
              leave={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }} */
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
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
                  thumbnailRatio="16:9"
                />
              )}
            </Trail>
          </Container>
        </GridList>
      </Grid>
    </Container>
  ));
