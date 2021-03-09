import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import Title from '../../../../../.storybook/components/Title';

const Cta = (
  <p className="--small -color-cerulean5 -flex-vertical-center">Add Option</p>
);

export default () => {
  const [loading, setLoading] = useState(false);
  return (
    <Title title="Button | Base">
      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Big</h3>
      <Button onClick={action('Button Pressed')}>Base</Button>

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Medium</h3>
      <Button medium onClick={action('Button Pressed')}>
        Base
      </Button>

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Little</h3>
      <Button little onClick={action('Button Pressed')}>
        Base
      </Button>

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Small</h3>
      <Button small onClick={action('Button Pressed')}>
        Base
      </Button>

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Disabled</h3>
      <Button disabled onClick={action('Button Pressed')}>
        Base
      </Button>

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Loading</h3>
      <Button
        className="-margin-right1x"
        loading={loading}
        onClick={() => setLoading(true)}
      >
        Try me
      </Button>

      <Button
        loading
        className="-margin-right1x"
        onClick={action('Button Pressed')}
      >
        Base
      </Button>

      <Button
        loading
        className="-margin-right1x"
        onClick={action('Button Pressed')}
      >
        <span>ciao </span>
        Div interni
      </Button>

      <Button
        loading
        small
        className="-margin-right1x"
        onClick={action('Button Pressed')}
      >
        Base
      </Button>

      <Button
        loading
        medium
        className="-margin-right1x"
        onClick={action('Button Pressed')}
      >
        Base
      </Button>

      <Button
        little
        loading
        className="-margin-right1x"
        onClick={action('Button Pressed')}
      >
        Base
      </Button>

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Block</h3>
      <Button block onClick={action('Button Pressed')}>
        Base
      </Button>

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Icon</h3>
      <Button icon="AddBig16X" onClick={action('Button Pressed')} />
      <br />
      <br />
      <Button medium icon="AddBig16X" onClick={action('Button Pressed')} />
      <br />
      <br />
      <Button small icon="AddBig16X" onClick={action('Button Pressed')} />

      <h3 style={{ marginTop: '20px', marginBottom: '5px' }}>Empty</h3>
      <Button empty medium onClick={action('Button Pressed')}>
        {Cta}
      </Button>
    </Title>
  );
};
