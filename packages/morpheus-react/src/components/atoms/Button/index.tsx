import React, { useState, FunctionComponent, MouseEventHandler } from 'react';
import cx from 'classnames';

// import 'morpheus-sass/src/style/atoms/_button.scss';

import type { ButtonProps, OptionsProps } from "./index.d";

const Button: FunctionComponent<ButtonProps> = ({
  block,
  children,
  type,
  disabled,
  medium,
  small,
  little,
  negative,
  onClick,
  options,
  className,
  text,
  optionWidth,
  optionDirection,
  loading,
  ...rest
}) => {
  const [optionClose, setOption] = useState(true);

  const handleClick: MouseEventHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!!options && !options.length && onClick) onClick(e);
    else setOption(!optionClose);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setOption(true);
    }, 200);
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLInputElement> | React.KeyboardEvent<Element>, option: OptionsProps) => {
    e.preventDefault();
    e.stopPropagation();
    if(onClick) onClick(option);
  };

  return (
    <button
      {...rest}
      className={cx(className, {
        btn: true,
        '--medium': !!medium,
        '--small': !!small,
        '--disabled': !!disabled,
        '--confirm': !!confirm,
        '--negative': !!negative,
        '--block': !!block,
        '--options': !!options && options.length > 0,
        '--text': !!text,
        '--little': !!little,
        '--loading': !!loading,
      })}
      role={type}
      type={type}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      {children}
      {!!options && options.length > 0 && (
        <div
          className={cx({
            __options: true,
            '--small': optionWidth === 'small',
            '--right': optionDirection === 'right',
            '--open': !optionClose,
          })}
        >
          {!!options && options.map((option) => (
              <div
                aria-label="0"
                className={cx({
                  __option: true,
                  '--danger': option.type === 'danger',
                  '--success': option.type === 'base',
                })}
                key={option.id}
                role="presentation"
                onClick={(e: React.MouseEvent<HTMLInputElement>) => handleOptionClick(e, option)}
                onKeyPress={(e: React.KeyboardEvent<Element>) => handleOptionClick(e, option)}
              >
                {option.label}
              </div>
            ))}
        </div>
      )}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  medium: false,
  small: false,
  negative: false,
  block: false,
  onClick: () => null,
  className: '',
  options: [],
  text: false,
  optionWidth: '',
  optionDirection: '',
  little: false,
  loading: false,
};

export default Button;
