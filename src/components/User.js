import React from 'react';

//user component > users
const User = (props) => {
    const { min, src, alt, name } = props;

    return (
        // eslint-disable-next-line
        <a href='#' className={min ? 'user min' : 'user'}>
            <img src={src} alt={alt}></img>
            <div>{name}</div>
        </a>
    )

};

export default User;