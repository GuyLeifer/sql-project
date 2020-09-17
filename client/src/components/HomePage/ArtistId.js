import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ArtistId(match) {
    console.log("match: ", match);
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        fetchArtist();
    }, []);

    const fetchArtist = async() => {
        const { data } = await axios.get(`/artist/${match.match.params.id}`);
        console.log("data :" , data)
        setArtist(data);
        console.log("artist: ",artist)
        // data.map(album => console.log(data.Album_name))
    }
    
    return (
        <>
            {artist && (
        <div className="info">
            <div>Artist Name: {artist[0].Artist_name}</div>
            <div>Created At: {artist[0].Created_at}</div>
            <div>Upload At: {artist[0].Upload_at}</div>
            <div>Cover Image: 
                <div>
                    <img src={artist[0].Artist_Cover_img} alt={artist[0].Artist_name} />
                </div>
            </div>
            <div>
            <p>Albums :</p>

            {artist.map((album) => {
                return (
                    <Link to={`/album/${album.Album_id}`}>
                        <div className="albumOnArtist">
                            <ol>
                                <li>
                                    <div>{album.Album_name}</div>
                                    <div>
                                        <img src={album.Album_Cover_img}/>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </Link>
                )
            })}
            </div>
            </div>
            )}
</>
    )
}

export default ArtistId
