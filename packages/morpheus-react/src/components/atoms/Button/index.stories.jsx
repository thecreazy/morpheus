import React from 'react';
import { storiesOf } from '@storybook/react';

import Base from './stories.components/base';
import Primary from './stories.components/primary';
import Confirm from './stories.components/confirm';
import Secondary from './stories.components/secondary';
import Danger from './stories.components/danger';
import Negative from './stories.components/negative';
import Dashed from './stories.components/dashed';
import Text from './stories.components/text';
import Cerulean from './stories.components/cerulean';
import Tangerine from './stories.components/tangerine';

import Button from '.';

storiesOf('1. Atoms | Button', module)
  .addParameters({ component: Button })
  .add('Base', () => <Base />)
  .add('Primary', () => <Primary />)
  .add('Secondary', () => <Secondary />)
  .add('Confirm', () => <Confirm />)
  .add('Cerulean', () => <Cerulean />)
  .add('Tangerine', () => <Tangerine />)
  .add('Danger', () => <Danger />)
  .add('Negative', () => <Negative />)
  .add('Dashed', () => <Dashed />)
  .add('Text', () => <Text />);
