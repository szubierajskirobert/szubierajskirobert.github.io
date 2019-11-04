import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter initValue={2} />
      <Counter initValue={14} />
      <Counter initValue={3} />
      <Counter />
    </div>
  );
}

export default App;