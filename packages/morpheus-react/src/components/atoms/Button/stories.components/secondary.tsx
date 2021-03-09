import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

const Story: React.FunctionComponent = () => (
  <Title title="Button | Secondary">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button secondary onClick={action('Button Pressed')}>
      Secondary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button medium secondary onClick={action('Button Pressed')}>
      Secondary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button little secondary onClick={action('Button Pressed')}>
      Secondary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button secondary small onClick={action('Button Pressed')}>
      Secondary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
    <Button disabled secondary onClick={action('Button Pressed')}>
      Secondary
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
    <Button loading secondary onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block secondary onClick={action('Button Pressed')}>
      Confirm
    </Button>
  </Title>
);

export default Story;
