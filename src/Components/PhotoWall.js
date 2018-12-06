import React, { Component } from 'react';
import Photo from './Photo';

class PhotoWall extends Component {
  // constructor(props) {
  //   super(props);
  //   const {
  //     posts,
  //   } = props;
  //   this.posts = posts;
  // }

  render() {
    const {
      posts,
    } = this.props;
    return (
      <div className="photo-grid">
        {posts.map((post, index) => <Photo key={index} post={post} />)}
      </div>
    );
  }
}

export default PhotoWall;
