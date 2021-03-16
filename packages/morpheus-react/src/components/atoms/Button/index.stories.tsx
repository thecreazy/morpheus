import React from 'react';
import { storiesOf } from '@storybook/react';

import Base from './stories.components/base';
import Negative from './stories.components/negative';
import Text from './stories.components/text';

import Button from '.';

storiesOf('1. Atoms | Button', module)
  .addParameters({ component: Button })
  .add('Base', () => <Base />)
  .add('Negative', () => <Negative />)
  .add('Text', () => <Text />);
