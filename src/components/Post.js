import React, { Component } from 'react';

//post for Posts
export default class Post extends Component {
    render() {
        return (
            <div className='post'>

                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='post__name'>post name</div>
                <div className='post__descr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        )
    }
}