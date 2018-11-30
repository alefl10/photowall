import React, { Component } from 'react';

class Photo extends Component {

  render() {
    const {
      post,
    } = this.props;
    return (
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
      </figure>
    );
  }
}

export default Photo;
