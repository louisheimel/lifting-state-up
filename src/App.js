import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Small extends Component {
  state = { counter: 0 };
  render() {
    return (
      <div className="small">
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

class Big extends Component {
  state = { counter: 0 };
  render() {
    return (
      <div className="big">
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

class App extends Component {
  state = { smallClicks: 0 };

  render() {
    return (
      <div className="App">
        <Big count={3} />
        <Small count={4} />
      </div>
    );
  }
}

export default App;
