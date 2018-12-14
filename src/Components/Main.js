import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { startLoadingPost, startLoadingComment } = this.props;
    startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    startLoadingComment();
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Title title="PhotoWall" />
        <Route
          exact
          path="/"
          render={() => (
            <div>
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
        <Route
          path="/single/:id"
          render={params => (
            <Single loading={loading} {...this.props} {...params} />
          )}
        />
      </div>
    );
  }
}

export default Main;
