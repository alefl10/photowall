import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const {
    history,
    match,
    posts,
    addComment,
    comments,
  } = props;
  const { id } = match.params;
  const post = posts.find(postItem => postItem.id === id);

  return (
    <div className="single-photo">
      <Photo {...props} post={post} index={Number(id)} />
      <Comments addComment={addComment} comments={comments} />
    </div>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
  comments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  addComment: PropTypes.func.isRequired,
};

export default Single;
