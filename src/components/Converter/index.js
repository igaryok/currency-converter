import { connect } from 'react-redux';

import { Converter } from './Converter';
import { 
  selectListCurrency, 
  selectCurrencyFrom, 
  selectCurrencyTo, 
  selectCurrentSum,
  selectIsLoading,
  selectIsErrorLoading, 
} from '../../store/selector'; 

const mapStateToProps = state => ({
  listCurrency: selectListCurrency(state),
  currencyFrom: selectCurrencyFrom(state),
  currencyTo: selectCurrencyTo(state),
  currentSum: selectCurrentSum(state),
  isLoading: selectIsLoading(state),
  isErrorLoading: selectIsErrorLoading(state),
});

const Enhanced = connect(
  mapStateToProps
)(Converter);

export { Enhanced as Converter };
