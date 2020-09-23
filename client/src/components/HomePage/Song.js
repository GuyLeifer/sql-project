import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

function Song({song}) {

    const opts = {
        height: '160',
        width: '260',
    }
    
    return (
        <Link to = {`/song/${song.Song_id}`}>
            <div className="song" >
                <span className="songTitle">{song.Title}</span> 
                <span className="songLength">{song.Length}</span>
                <div>
                    <YouTube videoId={song.YouTube_Link} opts={opts} />
                    {/* <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/> */}
                </div>
            </div>
        </Link>
    )
}

export default Song