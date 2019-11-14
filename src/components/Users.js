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

    onUsersLoaded = (users) => {
        this.setState({
            error: false,
            users: users,
        });
        console.log(this.state.users)
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
        const { error, users } = this.state;

        const userInfos = this.renderUsers(users);

        // if (error) {
        //     return <ErrorMessage />
           
        // }
        return (
           <div className='users__block'>
                <Link to='/profile/'>
                    <User
                        src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Ginny_Weasley_poster.jpg/220px-Ginny_Weasley_poster.jpg'
                        alt='Ginny'
                        name='Ginny Weasley'/>
                </Link>
               {error ? <ErrorMessage /> : userInfos}
           </div>
        )
    }
   

}
