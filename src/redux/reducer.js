import posts from '../data/posts';

const postReducer = (state = posts, action) => {
  console.log(action.index);
  return state;
};

export default postReducer;
