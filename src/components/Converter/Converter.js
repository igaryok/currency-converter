import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Select } from '../Select';
import { InputSum } from '../InputSum';
import { ResultSum } from '../ResultSum';
import { Loader } from '../Loader';
import { Error } from '../Error';

import './Converter.scss';


export const Converter = ({ 
  listCurrency, 
  currencyFrom, 
  currencyTo, 
  currentSum,
  isLoading,
  isErrorLoading
}) => (
  <>
    {isLoading && <Loader />}
    {isErrorLoading && <Error />}
    <div className='converter'>
      <div className='converter-currency'>
        <Select
          className='coverter-currency__from' 
          options={listCurrency} 
          name='from currency' 
          defaultValue={currencyFrom} 
          typeCurrency='currencyFrom'
        />
        <InputSum defaultValue={currentSum} />
      </div>
      <div className='converter-currency'>
        <Select
          className='converter-currency__to' 
          options={listCurrency} 
          name='to currency' 
          defaultValue={currencyTo}
          typeCurrency='currencyTo' 
        />
        <ResultSum />
      </div>
    </div>
    <Link className='button-link' to={'currency-rates'}>Show all currencies rates</Link>
  </>
);

Converter.propTypes = {
  listCurrency: PropTypes.shape().isRequired,
  currencyFrom: PropTypes.string.isRequired,
  currencyTo: PropTypes.string.isRequired,
  currentSum: PropTypes.number.isRequired,
  isLoading: PropTypes.bool
};
