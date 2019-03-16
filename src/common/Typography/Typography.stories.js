import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  H1, H2, H3, H4, H5, H6,
  HR,
  Enable, Disable,
  DESC, HEADLINE, SUBHEADLINE, CAPTION,
  DISPLAY4, DISPLAY3, DISPLAY2, DISPLAY1, PageTitle
} from './Typography';

storiesOf('Typography', module)
  .add('All', () => (
    <div>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <HR />
      <Enable>Enable</Enable>
      <HR />
      <Disable>Disable</Disable>
      <HR />
      <DESC>DESC</DESC>
      <HEADLINE>HEADLINE</HEADLINE>
      <SUBHEADLINE>SUBHEADLINE</SUBHEADLINE>
      <CAPTION>CAPTION</CAPTION>
      <DISPLAY4>DISPLAY4</DISPLAY4>
      <DISPLAY3>DISPLAY3</DISPLAY3>
      <DISPLAY2>DISPLAY2</DISPLAY2>
      <DISPLAY1>DISPLAY1</DISPLAY1>
      <PageTitle>PageTitle</PageTitle>
    </div>
  )
  );
