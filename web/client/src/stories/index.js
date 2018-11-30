import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { DisplayTriangleType} from '../components/DisplayTriangleType.component'
import {InputLengths} from "../components/InputLengths.compnent";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('DisplayTriangleType', module)
  .add('with scalene', () => <DisplayTriangleType type={"scalene"} />)
  .add('with isosceles', () => <DisplayTriangleType type={"isosceles"} />)
  .add('with equilateral', () => <DisplayTriangleType type={"equilateral"} />);

storiesOf('InputLengths', module)
  .add('no style', () => <InputLengths/>)
