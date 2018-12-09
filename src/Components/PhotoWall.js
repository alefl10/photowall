import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Photo from './Photo';


const PhotoWall = ({ posts, removePost }) => (
  <div>
    <Link className="addIcon" to="/AddPhoto" />
    <div className="photo-grid">
      {posts.map((post, index) => <Photo key={index} post={post} removePost={removePost} />)}
    </div>
  </div>
);

PhotoWall.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
};

export default PhotoWall;
