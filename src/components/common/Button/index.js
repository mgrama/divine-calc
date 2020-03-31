import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="button"
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: null,
  onClick: () => {}
};

export default Button;
