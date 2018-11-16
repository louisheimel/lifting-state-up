import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const divStyle = {
    border: '1px solid black',
    padding: '20px',
    margin: '40px',
  },
  childStyle = {
    backgroundColor: '#FF6B35',

    color: 'black',
  },
  parentStyle = {
    backgroundColor: '#004E89',
  };

class Child extends Component {
  render() {
    return (
      <div style={{...divStyle, ...childStyle}}>
        <p>Child Component</p>
      </div>
    );
  }
}

class Parent extends Component {
  render() {
    return (
      <div className="App" style={{...divStyle, ...parentStyle}}>
        <p>Parent Component</p>
        <Child />
      </div>
    );
  }
}
export default Parent;
