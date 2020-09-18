import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Song({song}) {
    const [songID, setSongID] = useState("");
    console.log(song)
    return (
        <Link to = {`/song/${song.Song_id}`}>
            <div className="song" >
                <span className="songTitle">{song.Title}</span> 
                <span className="songLength">{song.Length}</span>
                <div>
                    <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>
                </div>
            </div>
        </Link>
    )
}

export default Song