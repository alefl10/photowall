import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <figure className="figure">
    <img className="photo" src={props.post.imageLink} alt={props.post.description} />
    <figcaption>
      <p>{props.post.description}</p>
      <div className="button-container">
        <button
          onClick={() => {
            props.removePost(props.index);
          }}
        >
        Remove
        </button>
      </div>
    </figcaption>
  </figure>
);

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default Photo;
