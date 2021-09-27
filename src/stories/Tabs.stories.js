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
import Tabs from '../lib/component/Tabs/Tabs';

const tabs = [
  {
    id: 0,
    name: 'My Videos',
    icon: <div>ic</div>,
    content: <div>My Videos</div>,
  },
  {
    id: 1,
    name: 'Upload',
    icon: <div>ic</div>,
    content: <div>Upload</div>,
  },
  {
    id: 2,
    name: 'Record',
    icon: <div>ic</div>,
    content: <div>Record</div>,
  },
];

storiesOf('Tabs', module).add('Vertical', () => <Tabs tabs={tabs} vertical />);
