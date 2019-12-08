import { connect } from 'react-redux';

import { ListRatesCurrency } from './ListRatesCurrency';
import { selectListCurrency, selectBaseCurrency } from '../../store/selector'; 

const mapStateToProps = state => ({
  listCurrency: selectListCurrency(state),
  baseCurrency: selectBaseCurrency(state),
});

const Enhanced = connect(
  mapStateToProps
)(ListRatesCurrency);

export { Enhanced as ListRatesCurrency };
