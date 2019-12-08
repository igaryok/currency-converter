import { ACTIONS_TYPES } from './actions';

const initialState = {
  listCurrency: {},
  exchangeRatesUSD: {},
  isLoading: false,
  errorLoading: null,
  currencyFrom: 'USD',
  currencyTo: 'USD',
  currentSum: 0,
  baseCurrency: 'USD',
  sortedListRates: []
};


export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.SAVE_LIST_CURRENCY: {
      const { payload } = action;

      return ({
        ...state,
        error: null,
        listCurrency: payload
      });
    }

    case ACTIONS_TYPES.SAVE_RATES_USD: {
      const { payload } = action;

      return ({
        ...state,
        error: null,
        exchangeRatesUSD: payload
      });
    };

    case ACTIONS_TYPES.SET_CURRENCY_FROM: {
      const { payload } = action;

      return ({
        ...state,
        currencyFrom: payload
      });
    };

    case ACTIONS_TYPES.SET_CURRENCY_TO: {
      const { payload } = action;

      return ({
        ...state,
        currencyTo: payload
      });
    };

    case ACTIONS_TYPES.SET_BASE_CURRENCY: {
      const { payload } = action;

      return ({
        ...state,
        baseCurrency: payload
      });
    }

    case ACTIONS_TYPES.SET_CURRENT_SUM: {
      const { payload } = action;

      return ({
        ...state,
        currentSum: payload
      });

    };

    case ACTIONS_TYPES.SET_SORTED_LIST_RATES: {
      const { payload } = action;

      return ({
        ...state,
        sortedListRates: payload
      });
    }

    case ACTIONS_TYPES.START_LOADING: {
      return ({
        ...state,
        isLoading: true,
      });
    }

    case ACTIONS_TYPES.STOP_LOADING: {
      return ({
        ...state,
        isLoading: false,
      });
    }

    case ACTIONS_TYPES.SET_LOAD_ERROR: {
      const { payload } = action;

      return ({
        ...state,
        listCurrency: {},
        exchangeRatesUSD: {},
        isLoading: false,
        errorLoading: payload,
      });
    }

    default:
      return state;
  }
};
