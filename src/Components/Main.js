import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';


class Main extends Component {
  constructor() {
    super();
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
                {...this.props}
              />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto title="PhotoWall" {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

export default Main;
