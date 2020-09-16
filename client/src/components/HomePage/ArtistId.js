import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ArtistId(match) {
    console.log(match);
    const [artist, setArtist] = useState({});

    useEffect(() => {
        fetchArtist();
    }, []);

    const fetchArtist = async() => {
        const { data } = await axios.get(`/artist/${match.match.params.id}`);
        console.log(data)
        const name = data[0].Name;
        console.log(name)
        setArtist(data[0]);
        console.log(artist)
    }
    
    return (
        <div>
            <div>Artist Name: {artist.Name}</div>
            <div>Created At: {artist.Created_at}</div>
            <div>Upload At: {artist.Upload_at}</div>
            <div>Cover Image: 
                <img src={artist.Cover_img} alt={artist.Name} /></div>
        </div>
    )
}

export default ArtistId
