import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
    const {
      title,
    } = props;
    this.title = title;
  }

  render() {
    return (
      <h1>{this.title}</h1>
    );
  }
}

export default Title;
