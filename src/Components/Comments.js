import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comments extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    const { startAddingComment, id } = this.props;
    console.log(this.props);
    if (comment) {
      startAddingComment(comment, id);
      e.target.elements.comment.value = '';
    }
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="comment">
        {
          comments.map((comment, index) => <p key={index}>{comment}</p>)
        }
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="comment" name="comment" />
          <input className="submit" type="submit" />
        </form>
      </div>
    );
  }
}

Comments.propTypes = {
  startAddingComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.number.isRequired,
};

export default Comments;
