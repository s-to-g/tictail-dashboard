import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = props => {
  const {placeholder, inputValue, name, updateInput} = props;
  return (
    <input
      className="Input"
      type="text"
      placeholder={placeholder}
      value={inputValue}
      name={name}
      onChange={(event) => updateInput(event)}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired
}

export default Input;
