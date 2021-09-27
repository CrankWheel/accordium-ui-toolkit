import React from 'react';
import { storiesOf } from '@storybook/react';
import MiniUserDetail from './MiniUserDetail';
import Avatar from '../Avatar/Avatar';
import Divider from '../Divider/Divider';
import styles from './MiniUserDetail.module.scss';

storiesOf('Components/MiniUserDetail Component', module).add('Default', () => (
  <section>
    <MiniUserDetail
      avatar={<Avatar title="Zulfadhlil Hakim" small />}
      name={
        <span className="text5Bold" style={{ color: '#1A2B4A', opacity: '0.7' }}>
          Barrington Russell
        </span>
      }
      value={
        <span className="text5" style={{ color: '#565F79', opacity: '0.7' }}>
          14th June 2020
        </span>
      }
    />
    <Divider />
    <MiniUserDetail
      avatar={<Avatar title="Zulfadhlil Hakim" />}
      name={
        <span className="text5Bold" style={{ color: '#1A2B4A', opacity: '0.7' }}>
          Barrington Russell
        </span>
      }
      value={
        <span className="text5" style={{ color: '#565F79', opacity: '0.7' }}>
          14th June 2020
        </span>
      }
    />
    <Divider />
    <MiniUserDetail
      avatar={<Avatar title="Zulfadhlil Hakim" large />}
      name={
        <span className="text5Bold" style={{ color: '#1A2B4A', opacity: '0.7' }}>
          Barrington Russell
        </span>
      }
      value={
        <span className="text5" style={{ color: '#565F79', opacity: '0.7' }}>
          14th June 2020
        </span>
      }
    />
    <Divider />
    <MiniUserDetail
      name={
        <span className="text5Bold" style={{ color: '#1A2B4A', opacity: '0.7' }}>
          Barrington Russell
        </span>
      }
      value={
        <span className="text5" style={{ color: '#565F79', opacity: '0.7' }}>
          14th June 2020
        </span>
      }
    />
    <Divider />
    <MiniUserDetail
      avatar={<Avatar title="Zulfadhlil Hakim" large />}
      name={
        <span className="text5Bold" style={{ color: '#1A2B4A', opacity: '0.7' }}>
          Barrington Russell
        </span>
      }
      value={
        <span className="text5" style={{ color: '#565F79', opacity: '0.7' }}>
          14th June 2020
        </span>
      }
      avatarRight
    />
  </section>
));
