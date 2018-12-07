import React from 'react';

const AddPhoto = () => (
  <div>
    <h1>This is the page where will add photos</h1>
    <div className="form">
      <form>
        <input type="text" placeholder="Link" />
        <input type="text" placeholder="Description" />
        <button>Post</button>
      </form>
    </div>
  </div>
);

export default AddPhoto;
