import React from 'react';

export const ResultSum = ({ currencyFrom, currencyTo, rates, currentSum }) => {
  const result = currentSum * (rates[currencyTo] / rates[currencyFrom]);
  
  return (
    <label>{result.toFixed(3)}</label>
  )
}
