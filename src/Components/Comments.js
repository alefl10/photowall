import React from 'react';

const Comments = (props) => {
  const { } = props;

  return (
    <div className="comment">
      <form className="comment-form">
        <input type="text" placeholder="comment" />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Comments;
