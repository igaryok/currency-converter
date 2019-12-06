import { connect } from 'react-redux';

import { Select } from './Select';
import { setCurrencyFrom, setCurrencyTo } from '../../store/actions'; 

const mapDispatch2Props = dispatch => ({
  setCurrencyFrom: value => dispatch(setCurrencyFrom(value)),
  setCurrencyTo: value => dispatch(setCurrencyTo(value))
});

const Enhanced = connect(
  null,
  mapDispatch2Props
)(Select);

export { Enhanced as Select };
