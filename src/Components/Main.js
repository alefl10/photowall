import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Title from './Title';
import PhotoWall from './PhotoWall';
// import AddPhoto from './AddPhoto';


class App extends Component {
  constructor(props) {
    super(props);
    ({
      posts: this.posts,
    } = props);
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title="PhotoWall" />
              <PhotoWall
                posts={this.posts}
              />
            </div>
          )}
        />
        {/* <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              title="PhotoWall"
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost);
                history.push('/');
              }}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default App;
