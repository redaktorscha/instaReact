import React, { Component } from 'react';
import logo from '../logo.svg'; //variable contains src



//component Header

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='container h-flex'>{/*eslint-disable-next-line*/}                    
                    <a href='#' className='logo'>
                        <img src={logo} alt='logo'></img>
                    </a>
                    <nav className='links'>
                        <ul>
                            <li>{/*eslint-disable-next-line*/}
                                <a href='#' className='menu__links'>Лента</a> 
                            </li>
                            <li>{/*eslint-disable-next-line*/}                                
                                <a href='#' className='menu__links'>Профиль</a> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
};