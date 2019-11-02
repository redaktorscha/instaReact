import React from 'react';
import Posts from './Posts';
import Users from './Users';

//component: posts-block + users column
const Feed =() =>{
    return (
        <div className='container feed'>
            <Posts/>
            <Users/>
        </div>
    )
};
export default Feed;