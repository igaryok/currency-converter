import React from 'react';

import { Select } from '../Select';
import { InputSum } from '../InputSum';
import { ResultSum } from '../ResultSum';

import './Converter.scss';

export const Converter = ({ listCurrency }) => {
  
  return (
    <div className='converter'>
      <div className='converter-currency'>
        <Select
          className='coverter-currency__from' 
          options={listCurrency} 
          name='from currency' 
          defaultValue='USD' 
          isInputCurrency={true}
        />
        <InputSum defaultValue={'0'} />
      </div>
      <div className='converter-currency'>
        <Select
          className='converter-currency__to' 
          options={listCurrency} 
          name='to currency' 
          defaultValue='USD' 
        />
        <ResultSum />
      </div>
    </div>
  );
}