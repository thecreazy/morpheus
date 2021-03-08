import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

export default () => (
  <Title style={{ marginBottom: 500 }} title="Button | Dashed">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button dashed onClick={action('Button Pressed')}>
      Dashed
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button dashed medium onClick={action('Button Pressed')}>
      Dashed
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button dashed little onClick={action('Button Pressed')}>
      Dashed
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button dashed small onClick={action('Button Pressed')}>
      Dashed
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block dashed onClick={action('Button Pressed')}>
      Dashed
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Confirm</h3>
    <Button block confirm dashed onClick={action('Button Pressed')}>
      Dashed
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>With Option</h3>
    <Button
      block
      confirm
      dashed
      left
      options={[
        { label: 'Short text answer', id: 0 },
        { label: 'Long text answer', id: 1 },
        { label: 'Delete', id: 2, type: 'danger' },
        { label: 'Success', id: 3, type: 'base.jsx' },
      ]}
      onClick={action('Button Pressed')}
    >
      Add a new Field
    </Button>
  </Title>
);
