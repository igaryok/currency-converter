import { connect } from 'react-redux';

import { Converter } from './Converter';
import { selectListCurrency } from '../../store/selector'; 

const mapStateToProps = state => ({
  listCurrency: selectListCurrency(state)
});

const Enhanced = connect(
  mapStateToProps
)(Converter);

export { Enhanced as Converter };
