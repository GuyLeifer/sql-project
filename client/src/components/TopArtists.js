import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Artist from './Artist';

function TopArtists() {
    const [artists, setArtists] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/top_artists');
            setArtists(data);
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])

    return (
        <div className="topArtists">
            <div className="topHeader">Top Artists</div>
            {artists.map(artist => {
                return <Artist artist={artist} />
            })}
        </div>
    )
}

export default TopArtists;