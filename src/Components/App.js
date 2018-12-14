import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, applyMiddleware } from 'react-router-dom';
import { thunk } from 'redux-thunk';
import * as actions from '../redux/actions';
import Main from './Main';

const mapStateToProps = state => (
  {
    posts: state.posts,
    comments: state.comments,
  }
);
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
