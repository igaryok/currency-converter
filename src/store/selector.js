import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectListCurrency = createSelector(
  rootSelector,
  ({ listCurrency }) => listCurrency
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

export const selectBaseCurrency = createSelector(
  rootSelector,
  ({ baseCurrency }) => baseCurrency
);

export const selectSortedListRates = createSelector(
  rootSelector,
  ({ sortedListRates }) => sortedListRates
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading 
);

export const selectIsErrorLoading = createSelector(
  rootSelector,
  ({ errorLoading }) => errorLoading 
);
