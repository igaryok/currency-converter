import React from 'react';
import PropTypes from 'prop-types';

export const ResultSum = ({ currencyFrom, currencyTo, rates, currentSum }) => {
  const result = currentSum * (rates[currencyTo] / rates[currencyFrom]);
  
  return (
    <label>{result.toFixed(3)}</label>
  )
};

ResultSum.propTypes = {
  currencyFrom: PropTypes.string.isRequired,
  currencyTo: PropTypes.string.isRequired,
  rates: PropTypes.shape().isRequired,
  currentSum: PropTypes.number.isRequired
};
