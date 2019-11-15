import React, {Component} from 'react';
import ButtonsPanel from './ButtonsPanel';
import Title from './Title';
import Step from './Step';


// !!! Tylko komponenty klasowe posiadają stan - this.state
export default class Counter extends Component{  //można też dać export tutaj
    constructor(props){
        super(props);

        let iVal = (this.props.initValue === undefined) ? 0 : this.props.initValue;

        // !!! Stan komponentu inicjujemy w konstruktorach
        this.state = {
            value: iVal
        }

        //to moje próby odwołania się do Step z pliku step
        let stepValue = (this.props._inputStep === undefined) ? 0 : this.props._inputStep;

        // let stepValue = this.props._inputStep;

        // stepValue = 0;

        this.state = {
            Step: stepValue
        }

    }

    setStep = () =>{
        this.setState(() =>{
            return{
                Step: this._inputStep.value
            }
        });

    }

    changeValue = () => {
        console.log('Wywołuję na click w ButtonsPanel metodę utworzoną w rodzicu (Counter)')
        this.setState((prevState) => {
            return{
                value: prevState.value + 1 //próbowałem + step zamiast 1 ale nie działa
            }
        });
    }

    resetDozera = () => {
        console.log('Wywołuję na click w ButtonsPanel metodę utworzoną w rodzicu (Counter)')
        this.setState((prevState) => {
            return{
                value: prevState.value = 0
            }
        });
    }

    resetDoinit = () => {
        console.log('Wywołuję na click w ButtonsPanel metodę utworzoną w rodzicu (Counter)')
        this.setState((prevState) => {
            return{
                value: prevState.value = this.props.initValue
            }
        });
    }

    render(){
        return(
            <div className="counter-component">
                <Title valueCounter={this.state.value} />
                <ButtonsPanel label="Zwiększ licznik" actionCallback={this.changeValue} />
                <ButtonsPanel label="Zresetuj licznik" actionCallback={this.resetDozera} />
                <ButtonsPanel label="Zresetuj do initValue" actionCallback={this.resetDoinit} />
            </div>
        )
    }
}