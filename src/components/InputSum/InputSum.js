import React from 'react';

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
