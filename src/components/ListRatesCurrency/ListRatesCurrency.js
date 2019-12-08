import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Select } from '../Select';
import { ListRates } from '../ListRates';

import './ListRatesCurrency.scss';

export const ListRatesCurrency = ({ listCurrency, baseCurrency }) => {
  return(
    <div className="rates-currency">
      <Link className='button-link' to={'/'}>Currency autoconverter</Link>
      <h1>Rates currency</h1>
      <p>
        *You can click to row in the table with the currency and the row 
        moves on the begin of the table
      </p>
      <Select
        className='converter-currency__base' 
        options={listCurrency} 
        name='base currency' 
        defaultValue={baseCurrency}
        typeCurrency='currencyBase' 
      />
      <ListRates />
    </div>
  );
}

ListRatesCurrency.propTypes = {
  listCurrency: PropTypes.shape().isRequired,
};
