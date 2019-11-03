import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className='container profile'>
             <User
                src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Ginny_Weasley_poster.jpg/220px-Ginny_Weasley_poster.jpg'
                alt='user'
                name='Ginny Weasley'/>
            <Palette/>      
        </div>
    )
}

export default Profile;