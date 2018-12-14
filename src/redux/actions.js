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

export const loadPosts = posts => (
  {
    type: 'LOAD_POSTS',
    posts,
  }
);


/*
DB ACTIONS
*/

export const startLoadingPost = () => dispatch => (
  database.ref('posts').once('value') // Could have used on() to make the updates in real time
    .then((snapshot) => {
      const posts = [];
      snapshot.forEach((childSnapshot) => {
        posts.push(childSnapshot.val());
      });
      dispatch(loadPosts(posts));
    })
    .catch((err) => {
      console.log(`There has been an error while loading posts from Firebase:\n${err}`);
    })
);

export const startAddingPost = post => dispatch => (
  database.ref('posts').update({ [post.id]: post })
    .then(() => {
      dispatch(addPost(post));
    })
    .catch((err) => {
      console.log(`There has been an error while posting to Firebase:\n${err}`);
    })
);

export const startRemovingPost = (index, id) => dispatch => (
  database.ref(`posts/${id}`).remove()
    .then(() => {
      dispatch(removePost(index));
    })
);
