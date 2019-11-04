import React, { Component } from 'react';
import logo from '../logo.svg'; //variable contains src
import { Link } from 'react-router-dom';


//component Header

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='container h-flex'>{/*eslint-disable-next-line*/}                    
                    <Link to='/' className='logo'>
                        <img src={logo} alt='logo'></img>
                    </Link>
                    <nav className='links'>
                        <ul>
                            <li>{/*eslint-disable-next-line*/}
                                <Link to='/' className='menu__links'>Лента</Link> 
                            </li>
                            <li>{/*eslint-disable-next-line*/}                                
                                <Link to='/profile/' className='menu__links'>Профиль</Link> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
};