import { connect } from 'react-redux';

import { Select } from './Select';
import { 
  setCurrencyFrom, 
  setCurrencyTo, 
  setBaseCurrency } from '../../store/actions'; 

const mapDispatch2Props = dispatch => ({
  setCurrencyFrom: value => dispatch(setCurrencyFrom(value)),
  setCurrencyTo: value => dispatch(setCurrencyTo(value)),
  setBaseCurrency: value => dispatch(setBaseCurrency(value))
});

const Enhanced = connect(
  null,
  mapDispatch2Props
)(Select);

export { Enhanced as Select };
