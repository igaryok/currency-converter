import React from 'react';

import './Select.scss';

export const Select = ({ 
  options, 
  name, 
  defaultValue, 
  typeCurrency, 
  setCurrencyFrom, 
  setCurrencyTo, 
  setBaseCurrency 
}) => {

  const selectHandleChange = (option) => {
    switch (option) {
      case 'currencyFrom':
        return setCurrencyFrom;
      case 'currencyTo':
        return setCurrencyTo;
      case 'currencyBase':
        return setBaseCurrency;
      default:
        return;
    }
  }
  const handleChange = selectHandleChange(typeCurrency);
  const listCurrency = Object.keys(options);

  return (
    <label>
      {name.toUpperCase()}
      <select 
        onChange={e => handleChange(e.target.value)}
        className='currency-selector'
      >
        {listCurrency.map(item => (
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
