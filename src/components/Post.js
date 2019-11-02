import React, { Component } from 'react';
import User from './User';

//post component > Posts
export default class Post extends Component {
    
    render() {
        const { src, alt } = this.props;
        return (
            <div className='post'>
                <User
                min
                src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Ginny_Weasley_poster.jpg/220px-Ginny_Weasley_poster.jpg'
                alt='user'
                name='Ginny Weasley'/>                

                <img src={src} alt={alt}></img>
                <div className='post__name'>post name</div>
                <div className='post__descr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        )
    }
}