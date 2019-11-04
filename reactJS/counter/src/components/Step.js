import React, {Component} from 'react';
import './step.css';

class Step extends Component{
    constructor(props){
        super(props);
    }


    chandleChange = () => {
        this.props.actionCallback()
    }

    render(){
        return(
            <div>
                <label>Krok: </label>
                <input ref={(data) => { this._inputStep = data} } type='number' min='1' onChange={this.chandleChange}></input>
            </div>
        );
    }


}
export default Step;