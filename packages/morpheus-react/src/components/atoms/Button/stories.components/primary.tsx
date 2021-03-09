import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

const Story: React.FunctionComponent = () => (
  <Title title="Button | Primary">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button primary onClick={action('Button Pressed')}>
      Primary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button medium primary onClick={action('Button Pressed')}>
      Primary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button little primary onClick={action('Button Pressed')}>
      Primary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button primary small onClick={action('Button Pressed')}>
      Primary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
    <Button disabled primary onClick={action('Button Pressed')}>
      Primary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
    <Button loading primary onClick={action('Button Pressed')}>
      Primary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block primary onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Custom Class</h3>
    <Button primary className="-width32x" onClick={action('Button Pressed')}>
      Confirm
    </Button>
  </Title>
);

export default Story;
