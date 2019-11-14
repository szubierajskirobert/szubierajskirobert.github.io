import React from 'react';
import Axios from 'axios';
import CryptoList from './CryptoList'; 
import './Crypto.css';

class Crypto extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            cryptoList: [],
        }
    }

    getCryptoData(){        
        Axios.get('https://blockchain.info/pl/ticker')
        .then(res => {
            const ticker = res.data;
            // let cryptoListArray = [];
            this.setState({ticker});


            console.log(ticker);

            
            })

            console.log('dane załadowane');
        }

    componentDidMount(){
        console.log("Komponent się załadował");
        this.getCryptoData();
    }


    render(){

        return(
            <div className="Crypto">
                <CryptoList />
            </div>
        )
    }

}

export default Crypto;