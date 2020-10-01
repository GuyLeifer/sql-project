import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from '../Search/SearchBar'

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <img className="navImg" src="https://medias.timeout.co.il/www/uploads/2018/05/youtube-music-t-600x600.jpg" />
            <h3 className="navH3">My Streamer</h3>
            <ul className="nav-links">
            <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/add'>
                    <li>Add</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/account'>
                    <li>Account</li>
                </Link>
                {/* <SearchBar /> */}
            </ul>
        </nav>
    )
}

export default Nav
