/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid } from '../lib/component/Layout';

storiesOf('Layout', module).add('Container and Grid', () => (
  <Container>
    <Grid xs={6} sm={6} md={2} className="px2 border">
      sm-6 md-2
    </Grid>
    <Grid xs={12} sm={4} md={2} className="px2 border">
      sm-4 md-2
    </Grid>
    <Grid xs={6} sm={2} md={2} className="px2 border">
      sm-2 md-2
    </Grid>
  </Container>
));
