import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputNumber from './InputNumber';

storiesOf('InputNumber', module)
  .add('default', () => <InputNumber onChange={action('change')} />)
  .add('with `min`', () => <InputNumber onChange={action('change')} min={3} />)
  .add('with `max`', () => <InputNumber onChange={action('change')} max={4} />)
  .add('with `step`', () => <InputNumber onChange={action('change')} step={2} />)
  .add('with `min`, `max`, `step`', () => <InputNumber onChange={action('change')} min={3} max={14} step={2} />);
