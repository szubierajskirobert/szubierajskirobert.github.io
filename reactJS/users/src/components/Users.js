import React, {Component} from 'react';
import UsersList from './UsersList';
import './Users.css';

class Users extends Component{

    constructor(props){
        super(props);

        this.state = {
            usersList: [],
        }
    }

    addUser = (e) => {
        e.preventDefault();

        if(this._inputFirstName.value === '' && this._inputLastName.value === ''){

        }else{


            let newUser = {
                key: Date.now(),    //czemu służy ta linijka, po co nam key? (analogia do tablic) - przy walidacji używamy klucza key: index,
                firstName: this._inputFirstName.value,
                lastName: this._inputLastName.value
            }
            // console.log(newUser);
            this.setState((prevState)=>{
                return{
                    usersList: prevState.usersList.concat(newUser) //tu zwracamy obiekt klasy usersList z pliku UsersList.js?
                }
            });

            this._inputFirstName.value = '';
            this._inputLastName.value = '';

        }
    }

    deleteUser = (removingUser) => { //tu trafi funkcja 
        let filteredUsers = this.state.usersList.filter((user) => {return user.key !== removingUser.key})
        console.log(filteredUsers);

        this.setState((prevState)=>{
            return{
                usersList: filteredUsers,
            }
        });
    }

    render(){
        let headingTitle = `"${this.props.title}"`;
        return(
            
            <div className="users-main">
                <h1>{headingTitle}</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(element)=>{this._inputFirstName = element}} type="text" placeholder="FirstName"/>&nbsp;
                    <input ref={(element)=>{this._inputLastName = element}} type="text" placeholder="LastName"/>
                    <button type="submit">Add user</button>
                </form>
                <UsersList usersList={this.state.usersList} deleteUser={this.deleteUser}/> 
            </div>

        );
    }
}

export default Users;