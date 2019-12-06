import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectListCurrency = createSelector(
  rootSelector,
  ({ listCurrency }) => Object.keys(listCurrency)
);

export const selectCurrencyFrom = createSelector(
  rootSelector,
  ({ currencyFrom }) => currencyFrom
);

export const selectCurrencyTo = createSelector(
  rootSelector,
  ({ currencyTo }) => currencyTo
);


export const selectRates = createSelector(
  rootSelector,
  ({ exchangeRatesUSD }) => exchangeRatesUSD
);

export const selectCurrentSum = createSelector(
  rootSelector,
  ({ currentSum }) => currentSum
);
