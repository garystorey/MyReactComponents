import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = props => {
  let classes = props.classes ? `btn ${props.classes}` : 'btn';
  let size = props.size ? props.size : 'medium';
  return (
    <button
      onClick={props.onClick}
      data-btn-size={size}
      data-btn-type={props.type}
      type="button"
      className={classes}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
