const BASE_URL = 'https://openexchangerates.org/api/';
const URL_CURRENCY = 'currencies.json';
const URL_RATES = 'latest.json?app_id=';
const API_KEY = 'be9423d4e8744a938087bb2febb7693e';


export const ACTIONS_TYPES = {
  SAVE_LIST_CURRENCY: 'SAVE_LIST_CURRENCY',
  SAVE_RATES_USD: 'SAVE_RATES_USD', 
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
  SET_CURRENCY_FROM: 'SET_CUURENCY_FROM',
  SET_CURRENCY_TO: 'SET_CURRENCY_TO',
  SET_CURRENT_SUM: 'SET_CURRENT_SUM',
  SET_BASE_CURRENCY: 'SET_BASE_CURRENCY',
  SET_SORTED_LIST_RATES: 'SET_SORTED_LIST_RATES' 
};

const saveListCurrency = data => ({
  type: ACTIONS_TYPES.SAVE_LIST_CURRENCY,
  payload: data,
});

const saveRatesUSD = data => ({
  type: ACTIONS_TYPES.SAVE_RATES_USD,
  payload: data
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

const setLoadingError = error => ({
  type: ACTIONS_TYPES.SET_LOAD_ERROR,
  payload: error,
});

export const setBaseCurrency = value => ({
  type: ACTIONS_TYPES.SET_BASE_CURRENCY,
  payload: value
});

export const setCurrencyFrom = value => ({
  type: ACTIONS_TYPES.SET_CURRENCY_FROM,
  payload: value
});

export const setCurrencyTo = value => ({
  type: ACTIONS_TYPES.SET_CURRENCY_TO,
  payload: value
});

export const setCurrentSum = value => ({
  type: ACTIONS_TYPES.SET_CURRENT_SUM,
  payload: value
});

export const setSortedListRates = data => ({
  type: ACTIONS_TYPES.SET_SORTED_LIST_RATES,
  payload: data
});

export const loadData = () => dispatch => {
  dispatch(startLoading());
  
  Promise.all([
    fetch(`${BASE_URL}${URL_CURRENCY}`).then(response => response.json()),
    fetch(`${BASE_URL}${URL_RATES}${API_KEY}`).then(response => response.json())
  ]).then(data => {
    const [listCurrencies, rates] = data;

    dispatch(saveListCurrency(listCurrencies));
    dispatch(saveRatesUSD(rates.rates));
  }).catch(error => dispatch(setLoadingError(error)))
    .finally(dispatch(stopLoading()));
};
