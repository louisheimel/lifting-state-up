import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Small(props) {
  const [clicks, setClicks] = useState(0);
  return (
    <div
      className="small"
      onClick={() => {
        props.handleSmallClick();
        setClicks(clicks + 1);
      }}>
      <p>{clicks}</p>
    </div>
  );
}

function Big(props) {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="big" onClick={() => setClicks(clicks + 1)}>
      <p>{clicks + props.smallClicks}</p>
    </div>
  );
}

function App() {
  const [smallClicks, setSmallClicks] = useState(0);
  return (
    <div className="App">
      <Big smallClicks={smallClicks} />
      <Small handleSmallClick={() => setSmallClicks(smallClicks + 1)} />
    </div>
  );
}

export default App;
