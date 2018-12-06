import React, { Component } from 'react';

class Photo extends Component {
  render() {
    const {
      post,
      onRemovePhoto,
    } = this.props;
    return (
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p>{post.description}</p>
          <div className="button-container">
            <button
              className="remove-button"
              onClick={() => onRemovePhoto(post)}
            >
            Remove
            </button>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
