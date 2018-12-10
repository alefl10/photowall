import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
  const { post, index, removePost } = props;

  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
        <div className="button-container">
          <button
            onClick={() => {
              removePost(index);
            }}
          >
          Remove
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  }).isRequired,
  removePost: PropTypes.func.isRequired,
};

export default Photo;
