import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../index';
import Title from '../../../../../.storybook/components/Title';

export default () => (
  <Title title="Button | Text">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button text onClick={action('Button Pressed')}>
      Base
    </Button>

    <Button confirm text onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button little text onClick={action('Button Pressed')}>
      Base
    </Button>
    <Button confirm little text onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button medium text onClick={action('Button Pressed')}>
      Base
    </Button>
    <Button confirm medium text onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button small text onClick={action('Button Pressed')}>
      Base
    </Button>
    <Button confirm small text onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <div style={{ marginLeft: '200px' }}>
      <Button
        icon
        medium
        text
        optionDirection="right"
        options={[
          { label: 'Edit', id: 0 },
          { label: 'Duplicate', id: 1 },
        ]}
        optionWidth="small"
        onClick={action('Button Pressed')}
      ></Button>
    </div>
  </Title>
);
