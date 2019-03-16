import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateTime from './DateTime';

storiesOf('DateTime', module)
  .add('with `date`', () => <DateTime date="2019-12-12" />);
