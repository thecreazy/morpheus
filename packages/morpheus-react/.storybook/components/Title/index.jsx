export default ({ title, subtitle, style, className, children }) => (
  <div style={{ padding: '50px', ...style }} className={className}>
    <h1 className="-margin-bottom1x">{title}</h1>
    {!!subtitle && <h4>{subtitle}</h4>}
    {children}
  </div>
);
