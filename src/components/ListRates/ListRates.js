import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './ListRates.scss';

export const ListRates = ({ ratesUSD, baseCurrency, listCurrency, sortedListRates, saveSortedListRates }) => {
  const [pageCurrency, changePageCurrency] = useState(baseCurrency);
  const sortedList = sortedListRates.length && pageCurrency === baseCurrency
    ? [...sortedListRates] 
    : Object.entries(ratesUSD)
      .map(item => [
        item[0], 
        item[1] / ratesUSD[baseCurrency], 
        listCurrency[item[0]], 
        1
      ]
      ).sort((a, b) => a[3] - b[3]);
  
  useEffect(() => {
    saveSortedListRates(sortedList);
    changePageCurrency(baseCurrency);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency]);
  
  const handleClick = ({ target: { id } }) => {
    const elem = sortedList.find(item => item[0] === id);
    if(elem[3] === 1) {
      elem[3] = 0
    } else {
      elem[3] = 1
    }
    sortedList.sort((a, b) => {
      if(a[3] === b[3]){
        if(a[0] < b[0]) return -1;
        if(a[0] > b[0]) return 1;
        if(a[0] === b[0]) return 0;
      }

      return a[3] - b[3];
    });
    
    saveSortedListRates(sortedList);
  }
  console.log('render');
  return (
    <table className="table-rates">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rates</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {sortedList && sortedList
          .map(item => 
            <tr
              className="table-rates-item" 
              key={item[0]} 
              id={item[0]}
              bgcolor={!item[3] ? "yellow" : null}
              onClick={event => handleClick(event)}
            >
              <td id={item[0]}>{item[0]}</td>
              <td id={item[0]}>{item[1].toFixed(5)}</td>
              <td id={item[0]}>{item[2]}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );  
};

ListRates.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  ratesUSD: PropTypes.shape().isRequired,
  listCurrency: PropTypes.shape().isRequired,
  sortedListRates: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape()
    )
  ).isRequired
};
