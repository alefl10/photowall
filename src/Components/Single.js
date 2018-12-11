import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const {
    match,
    posts,
    addComment,
  } = props;
  const { id } = match.params;
  const comments = props.comments[id] || [];
  const post = posts.find(postItem => postItem.id === id);
  const index = String(posts.findIndex(postItem => postItem.id === id));

  return (
    <div className="single-photo">
      <Photo {...props} post={post} index={Number(id)} />
      <Comments addComment={addComment} comments={comments} id={index} />
    </div>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
  comments: PropTypes.shape({
    postId: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ),
  }).isRequired,
  addComment: PropTypes.func.isRequired,
};

export default Single;
