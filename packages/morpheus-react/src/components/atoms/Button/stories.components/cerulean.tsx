import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

const Story: React.FunctionComponent = () => (
  <Title title="Button | Cerulean">
    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
    <Button cerulean onClick={action('Button Pressed')}>
      cerulean
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
    <Button cerulean medium onClick={action('Button Pressed')}>
      cerulean
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
    <Button cerulean small onClick={action('Button Pressed')}>
      cerulean
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
    <Button cerulean small onClick={action('Button Pressed')}>
      cerulean
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
    <Button cerulean disabled onClick={action('Button Pressed')}>
      cerulean
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
    <Button cerulean loading onClick={action('Button Pressed')}>
      cerulean
    </Button>

    <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
    <Button block cerulean onClick={action('Button Pressed')}>
      cerulean
    </Button>
  </Title>
);

export default Story;
