import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Album from './Album';

function TopAlbums() {
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/top_albums');
            setAlbums(data);
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])

    return (
        <div className="topAlbums">
            <div className="topHeader">Top Albums</div>
            {albums.map(album => {
                return <Album album={album} />
            })}
        </div>
    )
}

export default TopAlbums;