import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('0. Morpheus | Brand', module).add('Typography', () => (
  <div style={{ padding: '50px' }}>
    <h1 style={{ marginBottom: '50px' }}> Typography </h1>
    <p>
      The typography starts from a body size of <b>16px</b> and a basic
      line-height of <b>1.2rem.</b>
    </p>
    <p>The weights used are:</p>
    <ul className="-margin-bottom3x">
      <li>
        {' '}
        <b>Regular</b>
      </li>
      <li>
        {' '}
        <b>Medium</b>
      </li>
      <li>
        {' '}
        <b>Bold</b>
      </li>
    </ul>
    <table
      style={{
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: ' 0 1em',
      }}
    >
      <tr>
        <td style={{ width: '200px' }}>
          <h6 className="-color-mirage2"> HEADING H1</h6>
        </td>
        <td>
          <h1> Headline Level 1</h1>
        </td>
      </tr>

      <tr>
        <td>
          <h6 className="-color-mirage2"> HEADING H2 </h6>
        </td>
        <td>
          <h2> Headline Level 2</h2>
        </td>
      </tr>

      <tr>
        <td>
          <h6 className="-color-mirage2"> HEADING H3 </h6>
        </td>
        <td>
          <h3> Headline Level 3</h3>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> HEADING H4 </h6>
        </td>
        <td>
          <h4> Headline Level 4</h4>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> HEADING H5 </h6>
        </td>
        <td>
          <h5> Headline Level 5</h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> HEADING H6 </h6>
        </td>
        <td>
          <h6> Headline Level 6</h6>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Text </h6>
        </td>
        <td>
          <p style={{ width: '500px' }}>
            Continually unleash technically sound products before installed base
            opportunities. Holisticly harness granular e-business with
            e-business ROI.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> TEXT LINK</h6>
        </td>
        <td>
          <a className="--no-decoration">Text Link </a>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Text heading</h6>
        </td>
        <td>
          <p className="--heading" style={{ width: '500px' }}>
            Continually unleash technically sound products before installed base
            opportunities. Holisticly harness granular e-business with
            e-business ROI.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Text label</h6>
        </td>
        <td>
          <p className="--label" style={{ width: '500px' }}>
            Continually unleash technically sound products before installed base
            opportunities. Holisticly harness granular e-business with
            e-business ROI.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> BODY 1 BOLD</h6>
        </td>
        <td>
          <p className="--small --bold" style={{ width: '500px' }}>
            Continually unleash technically sound products before installed base
            opportunities. Holisticly harness granular e-business with
            e-business ROI.
          </p>
        </td>
      </tr>

      <tr>
        <td>
          <h6 className="-color-mirage2">CAPTION</h6>
        </td>
        <td>
          <p className="--caption">Caption text goes here.</p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2">CAPTION LINK</h6>
        </td>
        <td>
          <a className="--caption">Caption link goes here.</a>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2">CAPTION HEADING</h6>
        </td>
        <td>
          <p className="--heading --caption">Caption heading goes here.</p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Input Label </h6>
        </td>
        <td>
          <p className="--label">Label</p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Big Numbers </h6>
        </td>
        <td>
          <p className="bigno">Big Numbers </p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Text paragraph </h6>
        </td>
        <td>
          <p className="-paragraph">Text paragraph </p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Caption paragraph </h6>
        </td>
        <td>
          <p className="--caption -paragraph"> Caption paragraph </p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> Label paragraph </h6>
        </td>
        <td>
          <p className="--label -paragraph">Label paragraph</p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> H3 paragraph </h6>
        </td>
        <td>
          <h3 className="-paragraph">H3 paragraph </h3>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> TEXT WATERFALL </h6>
        </td>
        <td>
          <p className=" -waterfall">
            {' '}
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium{' '}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <h6 className="-color-mirage2"> LABEL WATERFALL </h6>
        </td>
        <td>
          <p className="--label -waterfall">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </p>
        </td>
      </tr>
    </table>
  </div>
));
