import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Photo = (props) => {
  const {
    post,
    index,
    removePost,
    history,
  } = props;
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description} /></Link>
      <figcaption>
        <p>{post.description}</p>
        <div className="button-container">
          <button
            type="button"
            onClick={() => {
              removePost(index);
              history.push('/');
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
