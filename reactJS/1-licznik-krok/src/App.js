import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter initValue="0" />
            </div>
        );
    }
}
export default App;
