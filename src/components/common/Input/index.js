import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.scss';

const Input = ({
  className,
  value,
  placeholder,
  onChange,
  type
}) => {
  const inputClassName = classnames(['input', className]);

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={inputClassName}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
};

Input.defaultProps = {
  className: undefined,
  value: '',
  placeholder: '',
  onChange: () => {},
  type: 'text'
};

export default Input;
