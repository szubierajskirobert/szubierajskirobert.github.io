import React, {Component} from 'react';

constructor(props){
    super(props);

    this.state = {
        input.state = '',
        users: [],
        usersMock:[
            'Adam',
            'Wojciech',
            'Kamil'
        ]
    }
}

render() {
    return(
    <div>
        <div className="form">
            <input name="imie" onInput={this.handleInput}/>
            <button onClick={this.state}>Dodaj imie</button>
        </div>
    
        <div className="listing">
            <ul>
                {this.state.usersMock.map(user, index) => {
                    return <li key={index}>{user}</li>
                })}
            </ul>
        </div>
    </div>

    )
}

export default render;