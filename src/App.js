import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'

function App() {
    const testTag = [ '恐龙', '足球小子'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          </header>
          <NameCard name="Oliver" number="123456789" isHuman tags={testTag} />
          <LikesButton />
          <DigitalClock />
    </div>
  );
}

export default App;
