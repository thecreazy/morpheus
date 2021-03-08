/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
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
  icon,
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
  ...props
}) => {
  const [optionClose, setOption] = useState(true);

  const handleClick = (e) => {
    if (!options.length) onClick(e);
    else setOption(!optionClose);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setOption(true);
    }, 200);
  };

  const handleOptionClick = (e, option) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(option);
  };

  return (
    <button
      {...props}
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
        '--icon': !!icon,
        '--dashed': !!dashed,
        '--left': !!left,
        '--options': options.length > 0,
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
      {typeof icon !== 'string' && children}
      {options.length > 0 && (
        <div
          className={cx({
            __options: true,
            '--small': optionWidth === 'small',
            '--right': optionDirection === 'right',
            '--open': !optionClose,
          })}
        >
          {options.map((option) => {
            return (
              <div
                aria-label="0"
                className={cx({
                  __option: true,
                  '--danger': option.type === 'danger',
                  '--success': option.type === 'base.jsx',
                })}
                key={option.id}
                role="presentation"
                onClick={(e) => handleOptionClick(e, option)}
                onKeyPress={(e) => handleOptionClick(e, option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  type: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  confirm: PropTypes.bool,
  danger: PropTypes.bool,
  negative: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  dashed: PropTypes.bool,
  left: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape),
  text: PropTypes.bool,
  empty: PropTypes.bool,
  optionWidth: PropTypes.string,
  optionDirection: PropTypes.string,
  little: PropTypes.bool,
  cerulean: PropTypes.bool,
  tangerine: PropTypes.bool,
  loading: PropTypes.bool,
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
  icon: false,
  children: () => null,
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
