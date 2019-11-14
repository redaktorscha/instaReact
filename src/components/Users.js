import User from './User';
import ErrorMessage from './Error';
import {Link} from 'react-router-dom';

import React, { Component } from 'react';
import InstaService from '../services/InstaService';


//component: users block (right column)
export default class Users extends Component {

    constructor() {
        super();

        this.instaService = new InstaService();
        this.state = {
            users: [],
            error: false,
            currentUser: {
                picked: false,
            },
        }    
    }
    componentDidMount() {
        this.loadUsers();
    }

    loadUsers() {
        this.instaService.getUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onError = (err) => {
        this.setState(() => {
            return {error: true}
            });
            console.log(err);
    }

//userinfos for render
    onUsersLoaded = (users) => {       
        
        const usersSpliced = this.setCurrentUser(users);
        
        this.setState({
            error: false,
            users: usersSpliced,
        });
        console.log(this.state.users);
    }

    //get random index
    getRandomUser = (usersArr) => {        
        const randInt = arr => Math.floor(Math.random() * arr.length);
        return randInt(usersArr);    
    }

    //setting new current user
    setCurrentUser = (usersArr) => {
        // if (this.state.currentUser.picked) {
        //     usersArr.concat(deleted);
        // }
        //const index = this.state.currentUser.idCU || this.getRandomUser(usersArr);
        const index = this.getRandomUser(usersArr);

        //const currentUser = this.state.currentUser.idCU ? this.state.currentUser : usersArr[index]; 
        const currentUser = usersArr[index];

        const { nick, alt, pic, id } = currentUser;
        const deleted = usersArr.splice(index, 1);

        this.setState({
            currentUser: {
                nameCU: nick,
                altCU: alt,
                srcCU: pic,
                idCU: id,
                deleted,
                picked: true, 
            }       
        }); 
        return usersArr;
    }

    renderUsers(dataArr) {
        return dataArr.map(({ nick, alt, pic, id }) => {
            return (
                <User
                key={id}
                min
                src={pic}
                alt={alt}
                name={nick}/>
            );
        })

    }
    
    render() {
        const { error, users, currentUser } = this.state;
  
        const {nameCU, altCU, srcCU} = currentUser;

        const userInfos = this.renderUsers(users);

        // if (error) {
        //     return <ErrorMessage />
           
        // }
        return (
           <div className='users__block'>
                <Link to='/profile/'>
                    <User
                        src={srcCU}
                        alt={altCU}
                        name={nameCU}/>
                </Link>
               {error ? <ErrorMessage /> : userInfos}
           </div>
        )
    }
   

}
