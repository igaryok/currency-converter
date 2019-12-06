import React from 'react';

import './Select.scss';

export const Select = ({ options, name, defaultValue, isInputCurrency, setCurrencyFrom, setCurrencyTo }) => {
  const handleChange = isInputCurrency ? setCurrencyFrom : setCurrencyTo;

  return (
    <label>
      {name.toUpperCase()}
      <select 
        onChange={e => handleChange(e.target.value)}
        className='currency-selector'
      >
        {options.map(item => (
          <option 
            key={item} 
            value={item}
            selected={defaultValue === item}
          >
            {item}
          </option>
        ))}
      </select>
    </label>
  )
}
