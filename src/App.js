import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Small extends Component {
  state = { counter: 0 };
  handleClick = e => {
    this.props.updateClick();
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div className="small" onClick={this.handleClick}>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

class Big extends Component {
  state = { counter: 0 };

  updateCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div className="big" onClick={this.updateCount}>
        <p>{this.state.counter + this.props.counter}</p>
      </div>
    );
  }
}

class App extends Component {
  state = { smallClicks: 0 };
  updateClick = () => {
    this.setState({ smallClicks: this.state.smallClicks + 1 });
  };
  render() {
    return (
      <div className="App">
        <Big counter={0 + this.state.smallClicks} />
        <Small
          counter={this.state.smallClicks}
          updateClick={this.updateClick}
        />
      </div>
    );
  }
}

export default App;
