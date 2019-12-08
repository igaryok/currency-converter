import { connect } from 'react-redux';

import { ListRatesCurrency } from './ListRatesCurrency';
import { 
  selectListCurrency, 
  selectBaseCurrency,
  selectIsLoading,
  selectIsErrorLoading 
} from '../../store/selector'; 

const mapStateToProps = state => ({
  listCurrency: selectListCurrency(state),
  baseCurrency: selectBaseCurrency(state),
  selectIsLoading: selectIsLoading(state),
  isErrorLoading: selectIsErrorLoading(state)
});

const Enhanced = connect(
  mapStateToProps
)(ListRatesCurrency);

export { Enhanced as ListRatesCurrency };
