import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

const Story: React.FunctionComponent = () => (
  <Title title="Button | Tangerine">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button tangerine onClick={action('Button Pressed')}>
      tangerine
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button medium tangerine onClick={action('Button Pressed')}>
      tangerine
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button small tangerine onClick={action('Button Pressed')}>
      tangerine
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button small tangerine onClick={action('Button Pressed')}>
      tangerine
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
    <Button disabled tangerine onClick={action('Button Pressed')}>
      tangerine
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
    <Button loading tangerine onClick={action('Button Pressed')}>
      tangerine
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block tangerine onClick={action('Button Pressed')}>
      tangerine
    </Button>
  </Title>
);

export default Story;
