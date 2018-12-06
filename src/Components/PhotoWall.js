import React, { Component } from 'react';
import Photo from './Photo';

class PhotoWall extends Component {

  render() {
    const {
      posts,
      onRemovePhoto,
    } = this.props;
    return (
      <div className="photo-grid">
        {posts.map((post, index) => 
          <Photo key={index} post={post} onRemovePhoto={onRemovePhoto} />)}
      </div>
    );
  }
}

export default PhotoWall;
