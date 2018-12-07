import React, { Component } from 'react';

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    ({
      title: this.title,
      onAddPhoto: this.onAddPhoto,
    } = props);
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

    if (imageLink && description) {
      this.onAddPhoto(post);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
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

export default AddPhoto;
