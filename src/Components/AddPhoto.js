import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const { startAddingPost, onHistory } = this.props;
    const post = {
      id: '0',
      description,
      imageLink,
    };

    if (imageLink && description) {
      startAddingPost(post);
      onHistory.push('/');
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

AddPhoto.propTypes = {
  startAddingPost: PropTypes.func.isRequired,
};

export default AddPhoto;
