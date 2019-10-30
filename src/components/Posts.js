import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className='left'>
                <Post src='https://static.boredpanda.com/blog/wp-content/uploads/2018/10/The-Australian-Firefighters-2019-calendar-has-already-been-announced-and-this-charity-is-very-beautiful-to-see-5bbf039e6b9ff__700.jpg' alt='first'/>
                <Post src='https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/42/1024x1375/gallery-1508259728-hot-firefighters-australian-firefighters-calendar-2018122-6.jpg' alt='second'/>
            </div>
        )
    }
}