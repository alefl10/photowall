import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const {
    match,
    posts,
    startAddingComment,
    loading,
  } = props;
  const id = Number(match.params.id);
  const comments = props.comments[id] || [];
  const post = posts.find(postItem => postItem.id === id);
  const index = Number(posts.findIndex(postItem => postItem.id === id));

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="single-photo">
      <Photo {...props} post={post} index={index} />
      <Comments startAddingComment={startAddingComment} comments={comments} id={id} />
    </div>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
  comments: PropTypes.shape({
    postId: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ),
  }).isRequired,
  startAddingComment: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Single;
