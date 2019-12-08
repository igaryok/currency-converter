import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const InputSum = ({ defaultValue,  setCurrentSum }) => {

  return (
    <input
      className='input-field' 
      type='number' 
      defaultValue={defaultValue}
      onInput={event => setCurrentSum(Number(event.target.value))} 
    />
  )
}

InputSum.propTypes = {
  defaultValue: PropTypes.number.isRequired,
  setCurrentSum: PropTypes.func
};
