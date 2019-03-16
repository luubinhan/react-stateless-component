import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateTime from './DateTime';

storiesOf('DateTime', module)
  .add('with `date`', () => <DateTime date="2019-11-12" />)
  .add('with `locale`', () => <DateTime date="2019-01-20" locale="vi-VN" />);
