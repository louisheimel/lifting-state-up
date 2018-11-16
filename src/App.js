import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Blue extends Component {
  state = {counter: 0};
  render() {
    return (
      <div className="blue">
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

class Red extends Component {
  state = {counter: 0};
  render() {
    return (
      <div className="red">
        <p>{this.state.counter}</p>
        <Blue />
      </div>
    );
  }
}

class App extends Component {
  state = {counter: 0};
  render() {
    return (
      <div className="App">
        <Red />
      </div>
    );
  }
}

export default App;
