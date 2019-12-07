import { connect } from 'react-redux';

import { ListRates } from './ListRates';
import { 
  selectRates, 
  selectBaseCurrency, 
  selectListCurrency 
} from '../../store/selector';

const mapStateToProps = state => ({
  ratesUSD: selectRates(state),
  baseCurrency: selectBaseCurrency(state),
  listCurrency: selectListCurrency(state) 
});

const Enhanced = connect(
  mapStateToProps
)(ListRates);

export { Enhanced as ListRates };