import React from 'react';
import { Link } from 'react-router-dom';

import { Select } from '../Select';
import { InputSum } from '../InputSum';
import { ResultSum } from '../ResultSum';

import './Converter.scss';

export const Converter = ({ listCurrency }) => {
  
  return (
    <>
      <div className='converter'>
        <div className='converter-currency'>
          <Select
            className='coverter-currency__from' 
            options={listCurrency} 
            name='from currency' 
            defaultValue='USD' 
            typeCurrency='currencyFrom'
          />
          <InputSum defaultValue={'0'} />
        </div>
        <div className='converter-currency'>
          <Select
            className='converter-currency__to' 
            options={listCurrency} 
            name='to currency' 
            defaultValue='USD'
            typeCurrency='currencyTo' 
          />
          <ResultSum />
        </div>
      </div>
      <Link className='button-link' to={'currency-rates'}>Show all currencies rates</Link>
    </>
  );
}