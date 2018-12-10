import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Photo from './Photo';

const PhotoWall = (props) => {
  const { posts } = props;

  return (
    <div>
      <Link className="addIcon" to="/AddPhoto" />
      <div className="photo-grid">
        {posts.sort((x, y) => y.id - x.id).map((post, index) => (
          <Photo key={index} index={index} post={post} {...props} />))
        }
      </div>
    </div>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
};

export default PhotoWall;
