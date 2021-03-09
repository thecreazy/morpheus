import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

const Story: React.FunctionComponent = () => (
  <Title title="Button | Negative">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button negative onClick={action('Button Pressed')}>
      Negative
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button medium negative onClick={action('Button Pressed')}>
      Negative
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button little negative onClick={action('Button Pressed')}>
      Negative
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button negative small onClick={action('Button Pressed')}>
      Negative
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
    <Button disabled negative onClick={action('Button Pressed')}>
      Negative
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
    <Button loading negative onClick={action('Button Pressed')}>
      Negative
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block negative onClick={action('Button Pressed')}>
      Confirm
    </Button>
  </Title>
);

export default Story;
