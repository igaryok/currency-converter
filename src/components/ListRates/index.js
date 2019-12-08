import { connect } from 'react-redux';

import { ListRates } from './ListRates';
import { setSortedListRates } from '../../store/actions';
import { 
  selectRates, 
  selectBaseCurrency, 
  selectListCurrency,
  selectSortedListRates, 
} from '../../store/selector';

const mapStateToProps = state => ({
  ratesUSD: selectRates(state),
  baseCurrency: selectBaseCurrency(state),
  listCurrency: selectListCurrency(state),
  sortedListRates: selectSortedListRates(state), 
});

const mapDispatchToProps = dispatch => ({
  saveSortedListRates: data => dispatch(setSortedListRates(data)),
});

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRates);

export { Enhanced as ListRates };