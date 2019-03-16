import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Avatar from './Avatar';

storiesOf('Avatar', module)
  .add('with `name`', () => <Avatar name="luu binh an" />)
  .add('with `src`', () => (
    <Avatar src="https://c.disquscdn.com/uploads/users/2313/1869/avatar92.jpg?1552209230" />));
