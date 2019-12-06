import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Converter } from '../Converter';
import { listCurrency } from '../listCurrency';
import './App.scss';

export const App = ({ loadData }) => {
  useEffect(() => {
    loadData();
  });
  console.log('render');
  return (
    <>
      <h1 className='header'>Converter Currency</h1>
      <Switch>
        <Route path='/' exact component={Converter} />
        <Route path='/list-curency' component={listCurrency} />
      </Switch>
    </>
  )
};
