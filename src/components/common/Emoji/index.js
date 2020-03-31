import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Emoji = ({
  symbol,
  label,
  className
}) => {

  const emojiClassName = classnames(['emoji', className])

  return (
  <span
    role="img"
    className={emojiClassName}
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
)};

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string
};

Emoji.defaultProps = {
  label: undefined
};

export default Emoji;
