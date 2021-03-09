import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

export default () => (
  <Title title="Button | Danger">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button danger onClick={action('Button Pressed')}>
      Danger
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button danger medium onClick={action('Button Pressed')}>
      Danger
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button danger small onClick={action('Button Pressed')}>
      Danger
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button danger little onClick={action('Button Pressed')}>
      Danger
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
    <Button danger disabled onClick={action('Button Pressed')}>
      Danger
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
    <Button danger loading onClick={action('Button Pressed')}>
      Danger
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block danger onClick={action('Button Pressed')}>
      Confirm
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Icon</h3>
    <Button danger icon="AddBig16X" onClick={action('Button Pressed')} />
    <br />
    <br />
    <Button danger medium icon="AddBig16X" onClick={action('Button Pressed')} />
    <br />
    <br />
    <Button danger small icon="AddBig16X" onClick={action('Button Pressed')} />
  </Title>
);
