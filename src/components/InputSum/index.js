import { connect } from 'react-redux';

import { InputSum } from './InputSum';
import { setCurrentSum } from '../../store/actions'; 

const mapDispatch2Props = dispatch => ({
  setCurrentSum: value => dispatch(setCurrentSum(value)),
});

const Enhanced = connect(
  null,
  mapDispatch2Props
)(InputSum);

export { Enhanced as InputSum };
