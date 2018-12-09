import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => (
  {
    posts: state,
  }
);

const App = connect(mapStateToProps)(Main);

export default App;
