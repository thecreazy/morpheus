import React, { useState, FunctionComponent, MouseEventHandler } from 'react';
import cx from 'classnames';

import type { ButtonProps, OptionsProps } from "./index.d";

const Button: FunctionComponent<ButtonProps> = ({
  block,
  children,
  type,
  primary,
  secondary,
  disabled,
  medium,
  small,
  little,
  confirm,
  cerulean,
  danger,
  negative,
  onClick,
  dashed,
  left,
  options,
  className,
  text,
  empty,
  optionWidth,
  optionDirection,
  tangerine,
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
        '--primary': !!primary,
        '--secondary': !!secondary,
        '--medium': !!medium,
        '--small': !!small,
        '--disabled': !!disabled,
        '--confirm': !!confirm,
        '--danger': !!danger,
        '--negative': !!negative,
        '--block': !!block,
        '--dashed': !!dashed,
        '--left': !!left,
        '--options': !!options && options.length > 0,
        '--text': !!text,
        '--empty': !!empty,
        '--little': !!little,
        '--cerulean': !!cerulean,
        '--tangerine': !!tangerine,
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
  primary: false,
  secondary: false,
  disabled: false,
  medium: false,
  small: false,
  confirm: false,
  danger: false,
  negative: false,
  block: false,
  onClick: () => null,
  className: '',
  dashed: false,
  left: false,
  options: [],
  text: false,
  empty: false,
  optionWidth: '',
  optionDirection: '',
  little: false,
  cerulean: false,
  tangerine: false,
  loading: false,
};

export default Button;
