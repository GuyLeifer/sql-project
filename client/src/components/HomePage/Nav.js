import React from 'react';
import { Link } from 'react-router-dom';
import Shop from './Shop';
import About from './About';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>My Streamer</h3>
            <ul className="nav-links">
            <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
