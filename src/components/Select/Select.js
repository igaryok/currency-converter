import React from 'react';
import PropTypes from 'prop-types';

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

Select.propTypes = {
  options: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  typeCurrency: PropTypes.string.isRequired,
  setCurrencyFrom: PropTypes.func.isRequired,
  setCurrencyTo: PropTypes.func.isRequired,
  setBaseCurrency: PropTypes.func.isRequired
};
