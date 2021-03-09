import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

export default () => (
  <Title title="Button | Confirm">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button confirm onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button confirm medium onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button confirm small onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button confirm small onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
    <Button confirm disabled onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
    <Button confirm loading onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block confirm onClick={action('Button Pressed')}>
      Confirm
    </Button>
  </Title>
);
