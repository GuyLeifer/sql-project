import React from 'react';
import { Link } from 'react-router-dom';

function Playlist({playlist}) {
    return (
        <Link to = {`/playlist/${playlist.id}`}>
            <div className="playlist">
               <span className="playlistName">{playlist.Name}</span>
               <div className="albumImg">
                    <img src={playlist.Cover_img}/>
                </div>
            </div>
        </Link>
    )
}

export default Playlist;
