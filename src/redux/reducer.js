import postsData from '../data/posts';

const postReducer = function posts(state = postsData, action) {
  switch (action.type) {
    case 'REMOVE_POST':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      return state;
  }
};

// import posts from '../data/posts';
// 
// const postReducer = (state = posts, action) => {
//   switch (action.type) {
//     case 'REMOVE_POSTS':
//       return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
//     default:
//       return state;
//   }
// };

export default postReducer;
