import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AlbumId(match) {
    console.log(match);
    const [album, setAlbum] = useState({});

    useEffect(() => {
        fetchAlbum();
    }, []);

    const fetchAlbum = async() => {
        const { data } = await axios.get(`/artist/${match.match.params.id}`);
        console.log("data: ", data)
        setAlbum(data[0]);
    }
    console.log("album: ", album)

    return (
        <>
        {album && (
            <div className="info">
                <div>Album Name: {album.Album_name}</div>
                <Link to = {`/artist/${album.Artist_id}`}>
                    Artist Name: {album.Artist_name}
                </Link>
                <div>Created At: {album.Album_Created_at}</div>
                <div>Upload At: {album.Album_Upload_at}</div>
                <div>Cover Image: 
                    <div>
                        <img src={album.Album_Cover_img} alt={album.Album_name}/>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default AlbumId