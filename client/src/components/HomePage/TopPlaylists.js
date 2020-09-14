import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Playlist from './Playlist';

function TopPlaylists() {
    const [playlists, setPlaylists] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/top_playlist');
            setPlaylists(data);
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])

    return (
        <div className="topPlaylists">
            <div className="topHeader">Top Playlists</div>
            {playlists.map(playlist => {
                return <Playlist playlist={playlist} />
            })}
        </div>
    )
}

export default TopPlaylists;