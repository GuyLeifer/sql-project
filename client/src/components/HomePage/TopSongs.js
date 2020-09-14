import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Song from './Song';

function TopSongs() {
    const [songs, setSongs] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/top_songs');
            setSongs(data);
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])

    return (
        <div className="topSongs">
            <div className="topHeader">Top Songs</div>
            {songs.map(song => {
                return <Song song={song} />
            })}
        </div>
    )
}

export default TopSongs;

