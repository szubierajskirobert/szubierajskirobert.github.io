import React, {Component} from 'react';
import './step.css';

class Step extends Component{
    constructor(props){
        super(props);
    }


    chandleChange = () => {
        // console.log(this._inputStep.value);
        
        this.props.actionCallback(this._inputStep.value);
    }

    render(){
        return(
            <div>
                <label>Krok: </label>
                <input ref={(data) => {this._inputStep = data} } type='number' min='1' onChange={this.chandleChange} value={this.props.step} />
            </div>
        );
    }


}
export default Step;