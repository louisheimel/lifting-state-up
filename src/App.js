import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Small extends Component {
  state = {counter: 0};
  incrementSmallCounter = () => {
    this.props.handleSmallClick();
    this.setState({counter: this.state.counter + 1});
  };
  render() {
    return (
      <div className="small" onClick={this.incrementSmallCounter}>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

class Big extends Component {
  state = {counter: 0};
  incrementBigCounter = e => {
    e.preventDefault();
    this.setState({counter: this.state.counter + 1});
  };
  render() {
    return (
      <div className="big" onClick={this.incrementBigCounter}>
        <p>{this.state.counter + this.props.smallClicks}</p>
      </div>
    );
  }
}

class App extends Component {
  state = {smallClicks: 0};
  handleSmallClick = () =>
    this.setState({smallClicks: this.state.smallClicks + 1});

  render() {
    return (
      <div className="App">
        <Big smallClicks={this.state.smallClicks} />
        <Small handleSmallClick={this.handleSmallClick} />
      </div>
    );
  }
}

export default App;
