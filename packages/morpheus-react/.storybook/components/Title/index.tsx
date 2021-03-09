import React, { FunctionComponent } from 'react';

type TitleProps = {
  title: string,
  subtitle?: string,
};

const Title: FunctionComponent<TitleProps> = ({
  title,
  subtitle,
  children,
}) => (
  <div style={{ padding: '50px' }}>
    <h1 className="-margin-bottom1x">{title}</h1>
    {!!subtitle && <h4>{subtitle}</h4>}
    {children}
  </div>
);

export default Title;
