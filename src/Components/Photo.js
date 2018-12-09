import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ post, removePost }) => (
  <figure className="figure">
    <img className="photo" src={post.imageLink} alt={post.description} />
    <figcaption>
      <p>{post.description}</p>
      <div className="button-container">
        <button
          onClick={() => {
            removePost(1);
          }}
        >
        Remove
        </button>
      </div>
    </figcaption>
  </figure>
);

Photo.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  }).isRequired,
  removePost: PropTypes.func.isRequired,
};

export default Photo;
