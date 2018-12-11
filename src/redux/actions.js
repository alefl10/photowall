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
