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
    const post = {
      id: '0',
      description,
      imageLink,
    };
    const { addPost, onHistory } = this.props;
    console.log(onHistory);
    if (imageLink && description) {
      addPost(post);
      onHistory.push('/');
    }
  }

  render() {
    const { title } = this.props;
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
  title: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default AddPhoto;
