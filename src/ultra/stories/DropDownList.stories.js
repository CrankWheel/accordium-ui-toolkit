/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container, Grid } from '../lib/component/Layout';
import { PDFIcon, LiveEditorIcon } from '../lib/component/Iconography/SVGIcons';
import SVGIcon from '../lib/component/Iconography/SVGIcon';
import DropDownList from '../lib/component/DropDownList';
import DropDownListItem from '../lib/component/DropDownList/DropdownListItem';

const items = [
  {
    id: 1,
    thumbnail: (
      <SVGIcon size="sm">
        <PDFIcon />
      </SVGIcon>
    ),
    name: 'Amazing Menu #1',
    onClick: action('menu-click: Amazing Menu #1'),
    loading: false,
  },
  {
    id: 2,
    thumbnail: (
      <SVGIcon size="sm">
        <LiveEditorIcon />
      </SVGIcon>
    ),
    name: 'Amazing Menu #2',
    onClick: action('menu-click: Amazing Menu #2'),
    loading: false,
  },
  {
    id: 3,
    thumbnail: (
      <SVGIcon size="sm">
        <LiveEditorIcon />
      </SVGIcon>
    ),
    name: 'Amazing Menu #3',
    onClick: action('menu-click: Amazing Menu #3'),
    loading: true,
  },
];

storiesOf('DropDownList', module)
  .add('default', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <DropDownList>
          {items.map(item => (
            <DropDownListItem
              key={item.id}
              thumbnail={item.thumbnail}
              name={item.name}
              onClick={item.onClick}
              loading={item.loading}
            />
          ))}
        </DropDownList>
      </Grid>
    </Container>
  ))
  .add('Custom List Item', () => (
    <Container className="p1">
      <Grid xs={12} sm={6} className="px2">
        <DropDownList>
          <DropDownListItem custom>
            <div role="button" onClick={action('button-click')} tabIndex={0}>
              Custom Item #1
            </div>
          </DropDownListItem>
          <DropDownListItem custom>
            <button type="button" onClick={action('button-click')} tabIndex={0}>
              Custom Item #2
            </button>
          </DropDownListItem>
          <DropDownListItem custom>
            <a href="https://accordium.com">Accordium Website</a>
          </DropDownListItem>
        </DropDownList>
      </Grid>
    </Container>
  ));
