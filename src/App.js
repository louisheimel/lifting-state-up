import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Blue extends Component {
  state = {counter: 0};
  incrementSmallCounter = () =>
    this.setState({counter: this.state.counter + 1});
  render() {
    return (
      <div className="blue" onClick={this.incrementSmallCounter}>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

class Red extends Component {
  state = {counter: 0};
  incrementBigCounter = e => {
    e.preventDefault();
    this.setState({counter: this.state.counter + 1});
  };
  render() {
    return (
      <div className="red" onClick={this.incrementBigCounter}>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Red />
        <Blue />
      </div>
    );
  }
}

export default App;
