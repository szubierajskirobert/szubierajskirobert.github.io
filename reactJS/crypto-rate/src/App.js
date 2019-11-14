import React from 'react';
import logo from './logo.svg';
import Crypto from './components/Crypto';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Crypto rate
        </p>        
      </header>
      <Crypto />
    </div>
  );
}

export default App;
