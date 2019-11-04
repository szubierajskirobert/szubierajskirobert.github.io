import React from 'react';
// import React, {Component} from 'react'; opcja 2
import './Counter.css';
import Counter from './Counter';

// class CounterClass extends Component { opcja 2
class CounterClass extends React.Component {
    constructor(props) {
        //wywołuję konstruktor dla Component
        super(props); //trzeba też wywołac konstruktor dla Ojca elementu Component
    }

    render(){
        const text = 'Komponent klasowy Counter';
        const color = {
            'backgroundColor' : this.props.color
        }
        return(
            <div className="counter counter--dark" style={color}>
                <h1>{text}</h1>
                <h1>Komponent klasowy Counter</h1>
            </div>
        )
    }
}

export default CounterClass;