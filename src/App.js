import React, { Component } from 'react';
import Header from './components/header.component';
import Scene from './components/scene.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primitiveTypes: ['1']
   };
  }

  addPrimitive = (id) => {
    this.state.primitiveTypes.push(id);
  };

  render() {
    return (
      <main>
        <Header onAddPrimitive = {this.addPrimitive}/>
        <Scene primitives={this.state.primitiveTypes} />
      </main>
    );
  }
}

export default App;
