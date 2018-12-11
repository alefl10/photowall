import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const Single = (props) => {
  const { history, match, posts } = props;
  const { id } = match.params;
  const post = posts.find(postItem => postItem.id === id)

  return (
    <div className="single-photo">
      <Photo post={post} />
    </div>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
};

export default Single;
