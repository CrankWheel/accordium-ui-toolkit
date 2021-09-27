/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Transition } from 'react-spring/renderprops';
import { action } from '@storybook/addon-actions';
import { Container, Grid } from '../lib/component/Layout';
import CardList from '../lib/component/Card/CardList';
import CardListItem from '../lib/component/Card/CardList/CardListItem';
import SVGIcon from '../lib/component/Iconography/SVGIcon';
import ActionCard from '../lib/component/Card/ActionCard';
import { FlowJourney, QuickSignJourney, PDFIcon, LiveEditorIcon } from '../lib/component/Iconography/SVGIcons';
import CardContent from '../lib/component/Card/Card/CardContent';
import Card from '../lib/component/Card/Card';
import CardContentDescription from '../lib/component/Card/Card/CardContentDescription';
import CardExtraContent from '../lib/component/Card/Card/CardExtraContent';
import CardContentHeader from '../lib/component/Card/Card/CardContentHeader';
import CardContentCaption from '../lib/component/Card/Card/CardContentCaption';
import sampleImage from './avatar-example.jpg';
import Image from '../lib/component/Image/Image';
import Button from '../lib/component/Button';

const items = [
  {
    id: 1,
    fileType: 'pdf',
    fileName: 'Amazing Document #1',
    createdOn: '2 Feb 2019',
    fileSize: '3kb',
  },
  {
    id: 2,
    fileType: 'live',
    fileName: 'Amazing Document #2',
    createdOn: '2 Jan 2019',
    fileSize: '3kb',
  },
  {
    id: 3,
    fileType: 'pdf',
    fileName: 'Amazing Document #3',
    createdOn: '1 March 2019',
    fileSize: '30kb',
  },
];

storiesOf('Card', module)
  .add('Default Card', () => (
    <Container className="p1">
      <Grid xs={12} sm={3} className="px2">
        <Card>
          <CardContent>
            <CardContentHeader>Hello Barrington</CardContentHeader>
            <CardContentCaption>This is Caption</CardContentCaption>
            <CardContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContentDescription>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  ))
  .add('Default Card with Image', () => (
    <Container className="p1">
      <Grid xs={12} sm={3} className="px2">
        <Card>
          <Image src={sampleImage} fluid alt="Sample Image" />
          <CardContent>
            <CardContentHeader>Hello Barrington</CardContentHeader>
            <CardContentCaption>This is Caption</CardContentCaption>
            <CardContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContentDescription>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  ))
  .add('Card with multiple content', () => (
    <Container className="p1">
      <Grid xs={12} sm={3} className="px2">
        <Card>
          <CardContent>
            <CardContentHeader>Hello Barrington</CardContentHeader>
            <CardContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContentDescription>
          </CardContent>
          <CardContent>
            <CardContentHeader>Hello Zulfadhil</CardContentHeader>
            <CardContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContentDescription>
          </CardContent>
          <CardContent>
            <CardContentHeader>Hello Uways</CardContentHeader>
            <CardContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContentDescription>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  ))
  .add('Card with Extra Information', () => (
    <Container className="p1">
      <Grid xs={12} sm={3} className="px2">
        <Card>
          <CardContent>
            <CardContentHeader>Hello Barrington</CardContentHeader>
            <CardContentCaption>This is Caption</CardContentCaption>
            <CardContentDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContentDescription>
          </CardContent>
          <CardExtraContent>20 people</CardExtraContent>
        </Card>
      </Grid>
    </Container>
  ))
  .add('Card with Extra ClassName (padding)', () => (
    <Container className="p1">
      <Grid xs={12} sm={5} className="px2">
        <Card className="px3 py3 not-rounded">
          <CardContent>
            <CardContentHeader>Hello Barrington</CardContentHeader>
            <CardContentDescription className="text-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContentDescription>
          </CardContent>
          <CardContent>
            <Container>
              <Grid xs={12} className="py2">
                <Button primary block size="md" onClick={action('button-click')}>
                  Request a Callback
                </Button>
              </Grid>
              <Grid xs={6} className="pr1">
                <Button negative block size="md" onClick={action('button-click')}>
                  Positive Button
                </Button>
              </Grid>
              <Grid xs={6} className="pl1">
                <Button positive block size="md" onClick={action('button-click')}>
                  Negative Button
                </Button>
              </Grid>
            </Container>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  ))
  .add('Action Card', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <ActionCard
          thumbnail={
            <div className="icon-wrap">
              <QuickSignJourney />
            </div>
          }
          title="QuickSign"
          caption="Get your documents signed fast, with just a few clicks."
          onClick={action('button-click')}
        />
      </Grid>
      <Grid xs={12} sm={6} className="px2">
        <ActionCard
          thumbnail={
            <div className="icon-wrap">
              <FlowJourney />
            </div>
          }
          title="Flow"
          caption="Create advanced routing, signing, and approval workflows."
          onClick={action('button-click')}
        />
      </Grid>
    </Container>
  ))

  .add('Card List', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <CardList>
          {items.map(item => (
            <CardListItem
              thumbnail={
                item.fileType === 'pdf' ? (
                  <SVGIcon size="md">
                    <PDFIcon />
                  </SVGIcon>
                ) : (
                  <SVGIcon size="md">
                    <LiveEditorIcon />
                  </SVGIcon>
                )
              }
              title={item.fileName}
              caption={`${item.createdOn} - ${item.fileSize}`}
            />
          ))}
        </CardList>
      </Grid>
    </Container>
  ))
  .add('Card List with Animation', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <CardList>
          <Transition
            items={items}
            keys={item => item.id}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 700 }}
          >
            {item => props => (
              <CardListItem
                style={props}
                thumbnail={
                  item.fileType === 'pdf' ? (
                    <SVGIcon size="md">
                      <PDFIcon />
                    </SVGIcon>
                  ) : (
                    <SVGIcon size="md">
                      <LiveEditorIcon />
                    </SVGIcon>
                  )
                }
                title={item.fileName}
                caption={`${item.createdOn} - ${item.fileSize}`}
              />
            )}
          </Transition>
        </CardList>
      </Grid>
    </Container>
  ));
