import { connect } from 'react-redux';

import { ResultSum } from './ResultSum';
import { 
  selectCurrencyFrom, 
  selectCurrencyTo, 
  selectRates, 
  selectCurrentSum 
} from '../../store/selector'; 

const mapStateToProps = state => ({
  currencyFrom: selectCurrencyFrom(state),
  currencyTo: selectCurrencyTo(state),
  rates: selectRates(state),
  currentSum: selectCurrentSum(state)
});

const Enhanced = connect(
  mapStateToProps
)(ResultSum);

export { Enhanced as ResultSum };