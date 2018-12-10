import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import removePost from '../redux/actions';
import Main from './Main';

const mapStateToProps = state => ({ posts: state });
const mapDispatchToProps = dispatch => bindActionCreators({ removePost }, dispatch);

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
