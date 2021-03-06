import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Photo = (props) => {
  const {
    post,
    index,
    startRemovingPost,
    comments,
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
              startRemovingPost(index, post.id);
              history.push('/');
            }}
          >
          Remove
          </button>
          <Link className="button" to={`/single/${post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble" />
              {comments[post.id] ? comments[post.id].length : 0 }
            </div>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.shape({
    postId: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ),
  }).isRequired,
  startRemovingPost: PropTypes.func.isRequired,
};

export default Photo;
