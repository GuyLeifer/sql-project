import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';

function AlbumId(match) {
    console.log("match: ", match);
    console.log("id: ", match.match.params.id)
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        fetchAlbum();
    }, []);

    const fetchAlbum = async() => {
        const { data } = await axios.get(`/album/${match.match.params.id}`);
        console.log("data: ", data)
        setAlbum(data);
    }

    return (
        <>
        {album && (
            <div className="info">
                <div>Album Name: {album[0].Album_name}</div>
                <Link to = {`/artist/${album[0].Artist_id}`}>
                    Artist Name: {album[0].Artist_name}
                </Link>
                <div>Created At: {album[0].Album_Created_at}</div>
                <div>Upload At: {album[0].Album_Upload_at}</div>
                <div><h3>Cover Image:</h3> 
                    <div>
                        <img src={album[0].Album_Cover_img} alt={album[0].Album_name}/>
                    </div>
                </div>
                <div className="songsOnAlbum">
                    <h3>Songs:</h3>
                    <Carousel
                    center
                    infinite
                    showArrows
                    showIndicator
                    slidesToShow={3}>
                    {album.map((song) => {
                        return (
                            <Link to={`/song/${song.Song_id}`}> 
                                <p>{song.Title}</p>
                                <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>                           
                            </Link>  
                        )
                    })} 
                    </Carousel>
                </div>
            </div>            
        )}
        </>
    )
}

export default AlbumId