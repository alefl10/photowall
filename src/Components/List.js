import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    const {
      tasks,
    } = props;
    this.tasks = tasks;
  }

  render() {
    return (
      <ol>
        {this.tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ol>
    );
  }
}

export default List;
