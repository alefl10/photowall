import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Photo from './Photo';


class PhotoWall extends Component {
  constructor() {
    super();
    // ({
    //   posts: this.posts,
    // } = props);
  }

  render() {
    return (
      <div>
        <Link className="addIcon" to="/AddPhoto" />
        <div className="photo-grid">
          {this.props.posts.sort((x, y) => y.id - x.id).map((post, index) => (
            <Photo key={index} index={index} post={post} {...this.props} />))
          }
        </div>
      </div>
    );
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  })).isRequired,
};

export default PhotoWall;
