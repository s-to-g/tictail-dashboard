import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

const Button = props => {
  const {children, componentClass, onClickAction, type} = props;
  const buttonType = type || "submit";
  let classes = ['Button'];
  componentClass && classes.push(componentClass);
  return (
    <button className={classes.join(' ')} onClick={onClickAction} type={buttonType}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  componentClass: PropTypes.string,
  onClickAction: PropTypes.func,
  type: PropTypes.string
}

export default Button;
