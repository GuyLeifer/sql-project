import React from 'react';
import { Link } from 'react-router-dom';

function Adder() {
    return (
        <div className="adder">
            <Link to="/add">
                <p>If You Want To add Song, Artist, Album, or Playlist, You Can Do It Here</p> 
                <img src="https://i.ebayimg.com/images/g/2lAAAOSwRkxbQV32/s-l300.jpg"/>
            </Link>
        </div>
    )
}

export default Adder
