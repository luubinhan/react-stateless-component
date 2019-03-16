import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Price from './Price';

storiesOf('Price', module)
  .add('with `price`', () => <Price price={200000} />)
  .add('with `salePrice`', () => <Price price="300000" salePrice={200000} />)
  .add('with `locale`', () => <Price price="100000" locale="en-US" salePrice={60000} />)
  .add('with `symbol`', () => <Price price="400000" symbol="$" />);
