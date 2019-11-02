import React from 'react';
import User from './User';

//component: users block (right column)
export default function Users() {
    return (
        <div className='right'>
            <User
                src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Ginny_Weasley_poster.jpg/220px-Ginny_Weasley_poster.jpg'
                alt='Ginny'
                name='Ginny Weasley'/>
            <div className='users__block'>
            <User
                min
                src='https://i.pinimg.com/originals/9f/ad/c5/9fadc58a6801e8fcd659ccc4d07576a9.jpg'
                alt='Hermione'
                name='Hermione Granger'/>
            <User
                min
                src='https://peopletalk.ru/wp-content/uploads/2019/04/0530-luna-lovegood-evanna-lynch-harry-potter-now-photos-primary-1200x630-640x481.jpg'
                alt='Luna'    
                name='Luna Lovegood'/>            
            <User
                min    
                src='https://cdn.playbuzz.com/cdn//cc5cbcb0-66d6-4fa1-b0ec-4a83075ad55d/418ce638-3681-44fa-b601-7267a9861be4.jpg'
                alt='Minerva'
                name='Minerva McGonagall'/>
            </div>
        </div>
    )

}
