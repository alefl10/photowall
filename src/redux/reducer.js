import { combineReducers } from 'redux';
import initialPosts from '../data/posts';

const posts = (state = initialPosts, action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case 'ADD_POST':
      return [...state, action.post];
    default:
      return state;
  }
};

const comments = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      if (state[action.postId] === undefined) {
        return { ...state, [action.postId]: [action.comment] };
      }
      return { ...state, [action.postId]: [...state[action.postId], action.comment] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts,
  comments,
});

export default rootReducer;
