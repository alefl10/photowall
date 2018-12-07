import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const PhotoWall = ({ posts, onRemovePhoto }) => (
  <div className="photo-grid">
    {posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={onRemovePhoto} />)}
  </div>
);

PhotoWall.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
