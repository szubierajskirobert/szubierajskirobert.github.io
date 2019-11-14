import React, {Component} from 'react';

class UsersList extends Component{ //ta klasa dodaje użytkowników do listy, odejmuje i odświeża listę?
    
    createUser = (user) => {    //skąd wiadomo, że do parametru user trafi obiekt z pliku Users.js
        return( //dlaczego tu jest to key, żeby identydikować użytkownika po czasie?
            <li key={user.key}>
                <div>{user.firstName} {user.lastName}</div>                 
                <button onClick={ () => this.removeUser(user) }>X</button>
            </li>                
        )
    }

    removeUser = (user) =>{ //tu w parametrze funkcji deleteUser wysyłamy usera
        this.props.deleteUser(user); //w propsach przekazywana jest funkcja do rodzica - Users.js
    }


    render(){

        let listOfUsers=this.props.usersList;
        let users = listOfUsers.map(this.createUser);    //jaki jest efekt działania map? i co znajdzie się w zmiennej users?     


        return(
            <ul className="the-list">
                {users}
            </ul>
            
        );
    }
}


export default UsersList;