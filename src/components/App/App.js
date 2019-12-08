import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Converter } from '../Converter';
import { ListRatesCurrency } from '../ListRatesCurrency';

import './App.scss';

export const App = ({ loadData }) => {
  useEffect(() => {
    loadData();
  });
 
  return (
    <>
      <h1 className='header'>Converter Currency</h1>
      <Switch>
        <Route path='/' exact component={Converter} />
        <Route path='/currency-rates' component={ListRatesCurrency} />
      </Switch>
    </>
  )
};

App.propTypes = {
  loadData: PropTypes.func.isRequired
};
