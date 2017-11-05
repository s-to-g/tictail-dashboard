import React from 'react';
import PropTypes from 'prop-types';
import './TimeZoneSelect.css';

const TimeZoneSelect = (props) => {
  const {inputValue, updateInput} = props;
  return (
    <select className="TimeZoneSelect" value={inputValue} onChange={(event) => updateInput(event)}>
      <option value="Europe/Amsterdam">Amsterdam</option>
      <option value="America/Indiana/Indianapolis">Indianapolis</option>
      <option value="America/New_York">New York</option>
      <option value="America/Los_Angeles">Los Angeles</option>
      <option value="America/Bogota">Bogota</option>
      <option value="America/Chicago">Chicago</option>
    </select>
  )
}

TimeZoneSelect.propTypes = {
  inputValue: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired
}

export default TimeZoneSelect;
