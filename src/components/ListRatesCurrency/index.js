import { connect } from 'react-redux';

import { ListRatesCurrency } from './ListRatesCurrency';
import { selectListCurrency } from '../../store/selector'; 

const mapStateToProps = state => ({
  listCurrency: selectListCurrency(state)
});

const Enhanced = connect(
  mapStateToProps
)(ListRatesCurrency);

export { Enhanced as ListRatesCurrency };
