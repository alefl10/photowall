import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    const {
      post,
    } = props;
    this.post = post;
  }

  render() {
    return (
      <figure className="figure" />
    );
  }
}

export default Photo;
