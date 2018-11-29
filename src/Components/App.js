import React, { Component } from 'react';
import Title from './Title';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <Title title="toDos" />
        <List tasks={['Hello', 'Hola']} />
        <List tasks={['Bye', 'Adios']} />
      </div>
    );
  }
}

export default App;
