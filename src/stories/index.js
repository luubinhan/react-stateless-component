import React from 'react';

import { configure, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { themes } from '@storybook/theming';

const req = require.context('../common', true, /\.stories\.js$/);

// Option defaults.
addParameters({
  options: {
    name: 'Foo',
    theme: themes.light
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
