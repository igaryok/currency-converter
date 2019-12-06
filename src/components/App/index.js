import { connect } from 'react-redux';

import { App } from './App';
import { loadData } from '../../store/actions'; 

const mapDispatch2Props = {
  loadData,
};

const Enhanced = connect(
  null,
  mapDispatch2Props
)(App);

export { Enhanced as App };
