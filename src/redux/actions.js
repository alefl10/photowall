import database from '../database/config';

export const removePost = index => (
  {
    type: 'REMOVE_POST',
    index,
  }
);

export const addPost = post => (
  {
    type: 'ADD_POST',
    post,
  }
);

export const addComment = (comment, postId) => (
  {
    type: 'ADD_COMMENT',
    comment,
    postId,
  }
);

export const startAddingPost = post => dispatch => (
  database.ref('post').update({ [post.id]: post })
    .then(() => {
      dispatch(addPost(post));
    })
    .catch((err) => {
      console.log(`There has been an error while posting to Firebase:\n${err}`);
    })
);
